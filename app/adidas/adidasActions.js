const ADIDAS_SHOES_SOLD = 'ADIDAS_SHOE_SOLD';
const ADIDAS_SHOES_RESTOCKED = 'ADIDAS_SHOE_RESTOCKED';

// Actions
function sell_adidas(qty) {
  return {
    type: ADIDAS_SHOES_SOLD,
    payload: qty,
  };
}

function restock_adidas(qty) {
  return {
    type: ADIDAS_SHOES_RESTOCKED,
    payload: qty,
  };
}

export { ADIDAS_SHOES_SOLD, ADIDAS_SHOES_RESTOCKED, sell_adidas, restock_adidas };
