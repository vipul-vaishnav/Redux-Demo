import { legacy_createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

const FETCH_DATA_REQUESTED = 'FETCH_DATA_REQUESTED';
const FETCH_DATA_SUCCESSFUL = 'FETCH_DATA_SUCCESSFUL';
const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

function fetch_data_requested() {
  return {
    type: FETCH_DATA_REQUESTED,
  };
}

function fetch_data_success(data) {
  return {
    type: FETCH_DATA_SUCCESSFUL,
    payload: data,
  };
}

function fetch_data_failure(error) {
  return {
    type: FETCH_DATA_FAILED,
    payload: error,
  };
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUESTED:
      return state;
    case FETCH_DATA_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload],
        error: '',
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchData = () => {
  return function (dispatch) {
    dispatch(fetch_data_requested());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.status === 200) {
          const data = response.data.map((el) => el.name);
          dispatch(fetch_data_success(data));
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(fetch_data_failure(error));
      });
  };
};

const store = legacy_createStore(reducers, applyMiddleware(thunk.default));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchData());
