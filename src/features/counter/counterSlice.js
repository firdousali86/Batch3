import {createSlice} from '@reduxjs/toolkit';
import {addToCart} from '../cart/cartSlice';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // extraReducers: {
  //   ['cart/addToCart']: (state, action) => {
  //     state.value += 1;
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(addToCart, (state, action) => {
      state.value += 1;
    });
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
