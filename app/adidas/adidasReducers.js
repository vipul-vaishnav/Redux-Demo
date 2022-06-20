import { ADIDAS_SHOES_SOLD, ADIDAS_SHOES_RESTOCKED } from './adidasActions.js';
import { initialAdidasShopState } from './adidas.js';

// Reducers
const adidas_reducers = (state = initialAdidasShopState, action) => {
  switch (action.type) {
    case ADIDAS_SHOES_SOLD:
      return {
        ...state,
        adidas_shoes: state.adidas_shoes - action.payload,
      };
    case ADIDAS_SHOES_RESTOCKED:
      return {
        ...state,
        adidas_shoes: state.adidas_shoes + action.payload,
      };
    default:
      return state;
  }
};

export default adidas_reducers;
