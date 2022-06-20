import redux from 'redux';
import store from './app/store.js';
import { sell_adidas, restock_adidas } from './app/adidas/adidasActions.js';
import { sell_nike, restock_nike } from './app/nike/nikeActions.js';

console.log('InitialState', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated State: ', store.getState());
});

const actions = redux.bindActionCreators({ sell_adidas, sell_nike, restock_adidas, restock_nike }, store.dispatch);

actions.sell_adidas(2);
actions.restock_adidas(22);

actions.sell_nike(12);
actions.restock_nike(24);

unsubscribe();
