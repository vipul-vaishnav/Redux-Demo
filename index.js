import redux from "redux";

// Shoe shop
const SHOES_SOLD = "SHOE_SOLD";
const SHOES_RESTOCKED = "SHOE_RESTOCKED";

// InitialState
const initialState = {
  shoes: 100,
};

// Actions
function sell(qty) {
  return {
    type: SHOES_SOLD,
    payload: qty,
  };
}

function restock(qty) {
  return {
    type: SHOES_RESTOCKED,
    payload: qty,
  };
}

// Reducers
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOES_SOLD:
      return {
        ...state,
        shoes: state.shoes - action.payload,
      };
    case SHOES_RESTOCKED:
      return {
        ...state,
        shoes: state.shoes + action.payload,
      };
    default:
      return state;
  }
};

// store
const store = redux.legacy_createStore(reducers);

console.log("InitialState", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State: ", store.getState());
});

store.dispatch(sell(2));
store.dispatch(sell(4));
store.dispatch(sell(12));

store.dispatch(restock(4));
store.dispatch(restock(50));

unsubscribe();
