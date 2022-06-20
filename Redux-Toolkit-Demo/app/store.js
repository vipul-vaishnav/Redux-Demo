import pkg from '@reduxjs/toolkit';
import adidasReducers from './../features/adidas/adidasSlice.js';
import nikeReducers from './../features/nike/nikeSlice.js';
import customersReducers from './../features/customers/customersSlice.js';
import x from 'redux-logger';

const { configureStore } = pkg;
const { createLogger } = x;
const logger = createLogger();

export const store = configureStore({
  reducer: {
    adidas: adidasReducers,
    nike: nikeReducers,
    customers: customersReducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
