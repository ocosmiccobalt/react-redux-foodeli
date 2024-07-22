import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice.js';
import { cartActions } from '../../store/cart-slice.js';
import Modal from '../UI/Modal/Modal.jsx';
import CartItem from './CartItem.jsx';
import Button from '../UI/Button/Button.jsx';
import classes from './Cart.module.scss';

function Cart() {
  const userProgress = useSelector((state) => state.ui.userProgress);
  const cartIsVisible = userProgress === 'cart';

  const { items, totalPrice } = useSelector((state) => state.cart);
  const total = `$ ${totalPrice.toFixed(2)}`;
  const hasItems = items.length > 0;

  const dispatch = useDispatch();

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
