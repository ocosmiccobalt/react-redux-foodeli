import { cartActions } from './cart-slice.js';
import { uiActions } from './ui-slice.js';
import sendHttpRequest from '../util/send-http-request.js';
import storageAvailable from '../util/storage-available.js';

const HOST = 'http://localhost:3000';
const URL = HOST + '/cart/';

export function fetchCartData(cartId) {
  return async function (dispatch) {
    const url = URL + cartId;
    const config = {};
    const errorMessage = 'Could not fetch cart data!';

    try {
      const cartData = await sendHttpRequest(url, config, errorMessage);

      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalPrice: cartData.totalPrice,
          changed: false
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!'
        })
      );
    }
  };
}

export function sendCartData(cart, cartId) {
  return async function (dispatch) {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      })
    );

    const url = cartId ?
      URL + cartId :
      URL;

    const method = cartId ? 'PUT' : 'POST';

    const config = {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: cart.items,
        totalPrice: cart.totalPrice
      })
    };

    const errorMessage = 'Sending cart data failed.';

    try {
      const resData = await sendHttpRequest(url, config, errorMessage);
      const sentCartId = resData.cartId;

      if (sentCartId && storageAvailable('localStorage')) {
        localStorage.setItem('cartId', sentCartId);
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      );
    }
  };
}
