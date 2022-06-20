import { store } from './app/store.js';
import { sell_adidas_shoes, restock_adidas_shoes } from './features/adidas/adidasSlice.js';
import { sell_nike_shoes, restock_nike_shoes } from './features/nike/nikeSlice.js';
import { fetchCustomers } from './features/customers/customersSlice.js';

console.log('InitialState ', store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(sell_adidas_shoes(2));
// store.dispatch(restock_adidas_shoes(22));
// store.dispatch(sell_nike_shoes(2));
// store.dispatch(restock_nike_shoes(22));

console.log('<=================>');

store.dispatch(fetchCustomers());

unsubscribe();
