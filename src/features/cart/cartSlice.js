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

      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToAdd.name;
      });

      if (itemPresentKey !== -1) {
        const itemFound = state.cartItems[itemPresentKey];
        itemFound.quantity += 1;
      } else {
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {},
    clearCart: state => {},
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
