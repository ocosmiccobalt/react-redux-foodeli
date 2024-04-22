import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    userProgress: '',
    notification: null
  },
  reducers: {
    showCart(state) {
      state.userProgress = 'cart';
    },
    hideCart(state) {
      state.userProgress = '';
    },
    showCheckout(state) {
      state.userProgress = 'checkout';
    },
    hideCheckout(state) {
      state.userProgress = '';
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
