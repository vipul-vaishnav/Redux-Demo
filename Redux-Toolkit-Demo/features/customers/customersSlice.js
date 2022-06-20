import pkg from '@reduxjs/toolkit';
const { createSlice, createAsyncThunk } = pkg;
import axios from 'axios';

const initialState = {
  loading: true,
  customers: [],
  error: '',
};

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/usersdsd')
    .then((response) => response.data.map((el) => el.name))
    .catch((err) => err);
});

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state) => {
      state;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        customers: [...state.customers, action.payload],
        error: '',
      };
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        customers: [],
        error: action.payload,
      };
    });
  },
});

export default customersSlice.reducer;
