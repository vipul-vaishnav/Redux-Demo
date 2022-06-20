const NIKE_SHOES_SOLD = 'NIKE_SHOE_SOLD';
const NIKE_SHOES_RESTOCKED = 'NIKE_SHOE_RESTOCKED';

// Actions
function sell_nike(qty) {
  return {
    type: NIKE_SHOES_SOLD,
    payload: qty,
  };
}

function restock_nike(qty) {
  return {
    type: NIKE_SHOES_RESTOCKED,
    payload: qty,
  };
}

export { NIKE_SHOES_SOLD, NIKE_SHOES_RESTOCKED, sell_nike, restock_nike };
