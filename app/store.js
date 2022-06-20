import { legacy_createStore, combineReducers } from 'redux';
import AdidasReducers from './adidas/adidasReducers.js';
import NikeReducers from './nike/nikeReducers.js';

const rootReducer = combineReducers({
  adidas: AdidasReducers,
  nike: NikeReducers,
});

const store = legacy_createStore(rootReducer);

export default store;
