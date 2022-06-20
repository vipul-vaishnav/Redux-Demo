import pkg from '@reduxjs/toolkit';
const { createSlice } = pkg;

const initialState = {
  adidas_shoes: 30,
};

const adidasSlice = createSlice({
  name: 'adidas',
  initialState,
  reducers: {
    sell_adidas_shoes: (state, action) => {
      state.adidas_shoes -= action.payload;
    },
    restock_adidas_shoes: (state, action) => {
      state.adidas_shoes += action.payload;
    },
  },
});

export default adidasSlice.reducer;

export const { sell_adidas_shoes, restock_adidas_shoes } = adidasSlice.actions;
