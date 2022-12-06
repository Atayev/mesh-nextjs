import { createSlice } from "@reduxjs/toolkit";

const findItem = (state, action) =>
  state.cart.find((item) => item.id === action.payload.id);

const initialState = {
  cart: [],
  wishList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = findItem(state, action);
      cartItem
        ? cartItem.quantity++
        : state.cart.push({ ...action.payload, quantity: 1 });
    },
    incQuantity: (state, action) => {
      const item = findItem(state, action);
      item.quantity++;
    },
    decQuantity: (state, action) => {
      const item = findItem(state, action);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      let index = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart.splice(index, 1);
    },
  },
});

export const { addToCart, incQuantity, decQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
