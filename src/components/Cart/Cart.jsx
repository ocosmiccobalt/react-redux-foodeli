import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice.js';
import { cartActions } from '../../store/cart-slice.js';
import { fetchCartData, sendCartData } from '../../store/cart-async-actions.js';
import storageAvailable from '../../util/storage-available.js';
import Modal from '../UI/Modal/Modal.jsx';
import CartItem from './CartItem.jsx';
import Button from '../UI/Button/Button.jsx';
import classes from './Cart.module.scss';

let isInitial = true;
let cartId;

if (storageAvailable('localStorage')) {
  cartId = localStorage.getItem('cartId');
}

function Cart() {
  const userProgress = useSelector((state) => state.ui.userProgress);
  const cartIsVisible = userProgress === 'cart';

  const cart = useSelector((state) => state.cart);
  const { items, totalPrice } = cart;
  const total = `$ ${totalPrice.toFixed(2)}`;
  const hasItems = items.length > 0;

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartId) {
      dispatch(fetchCartData(cartId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart, cartId));
    }
  }, [cart, dispatch]);

  function handleCloseCart() {
    dispatch(uiActions.hideCart());
  }

  function handleGoToCheckout() {
    dispatch(uiActions.showCheckout());
  }

  function handleCartItemRemove(id) {
    dispatch(cartActions.removeItemFromCart(id));
  }

  function handleCartItemAdd(item) {
    dispatch(cartActions.addItemToCart({ ...item, quantity: 1 }));
  }

  const cartItems = items.map((item) => {
    const { id, title, price, quantity, totalPrice } = item;

    return (
      <CartItem
        key={id}
        title={title}
        price={price}
        quantity={quantity}
        totalPrice={totalPrice}
        onRemove={handleCartItemRemove.bind(null, id)}
        onAdd={handleCartItemAdd.bind(null, { id, title, price })}
      />
    );
  });

  return (
    <Modal
      open={cartIsVisible}
      onClose={cartIsVisible ? handleCloseCart : null}
    >
      <h2 className={classes.cart__title}>Your cart</h2>
      <ul
        className={classes.cart__list}
        role='list'
      >
        {cartItems}
      </ul>
      <p className={classes.cart__summary}>
        <span>Total:{' '}</span>
        <span>{total}</span>
      </p>
      <div>
        <button
          className={classes.cart__close}
          onClick={handleCloseCart}
          type='button'
          aria-label='Close the cart'
        >
          &times;
        </button>
        {hasItems && <Button onClick={handleGoToCheckout}>Order</Button>}
      </div>
    </Modal>
  );
}

export default Cart;
