import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    changed: false
  },
  reducers: {
    replaceCart(state, action) {
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items;
      state.changed = action.payload.changed;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const newItemTotalPrice = newItem.price * newItem.quantity;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice = state.totalPrice + newItemTotalPrice;
      state.changed = true;

      if (!existingItem) {
        const { id, title, price, quantity } = newItem;

        state.items.push({
          id,
          title,
          price,
          quantity,
          totalPrice: newItemTotalPrice
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.quantity;
        existingItem.totalPrice = existingItem.totalPrice + newItemTotalPrice;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalPrice = state.totalPrice - existingItem.price;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
