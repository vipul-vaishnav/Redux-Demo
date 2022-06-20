import { NIKE_SHOES_SOLD, NIKE_SHOES_RESTOCKED } from './nikeActions.js';
import { initialNikeShopState } from './nike.js';

// Reducers
const nike_reducers = (state = initialNikeShopState, action) => {
  switch (action.type) {
    case NIKE_SHOES_SOLD:
      return {
        ...state,
        nike_shoes: state.nike_shoes - action.payload,
      };
    case NIKE_SHOES_RESTOCKED:
      return {
        ...state,
        nike_shoes: state.nike_shoes + action.payload,
      };
    default:
      return state;
  }
};

export default nike_reducers;
