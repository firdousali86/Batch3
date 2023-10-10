import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      //check if item already exist

      state.cartItems.push({item: itemToAdd, quantity: 1});
    },
    removeFromCart: (state, action) => {},
    clearCart: state => {},
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
