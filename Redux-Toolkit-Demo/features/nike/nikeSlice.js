import pkg from '@reduxjs/toolkit';
const { createSlice } = pkg;

const initialState = {
  nike_shoes: 60,
};

const nikeSlice = createSlice({
  name: 'nike',
  initialState,
  reducers: {
    sell_nike_shoes: (state, action) => {
      state.nike_shoes -= action.payload;
    },
    restock_nike_shoes: (state, action) => {
      state.nike_shoes += action.payload;
    },
  },
});

export default nikeSlice.reducer;

export const { sell_nike_shoes, restock_nike_shoes } = nikeSlice.actions;
