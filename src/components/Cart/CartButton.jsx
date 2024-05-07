import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui-slice.js';
import Button from '../UI/Button.jsx';
import classes from '../UI/Button.module.scss';

function CartButton({ className = '' }) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const buttonModifiers = isHighlighted ? ['cart', 'bump'] : ['cart'];

  const items = useSelector((state) => state.cart.items);
  const numberOfCartItems = items.reduce((num, item) => num += item.quantity, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setIsHighlighted(true);

    const timer = setTimeout(() => setIsHighlighted(false), 300);

    return () => clearTimeout(timer);
  }, [items]);


  const dispatch = useDispatch();

  function handleShowCart() {
    dispatch(uiActions.showCart());
  }

  const iconClassName = `${
    classes.button__icon
  } ${
    classes['button__icon--cart']
  }`;

  const icon = (
    <svg
      className={iconClassName}
      width='20'
      height='22'
      aria-hidden='true'
      focusable='false'
    >
      <use xlinkHref='#icon-cart'></use>
    </svg>
  );

  return (
    <Button
      className={className}
      modifiers={buttonModifiers}
      onClick={handleShowCart}
    >
      <span className='visually-hidden'>Open the Cart:</span>
      <span className={classes.button__amount}>
        {numberOfCartItems}
      </span>
      {icon}
    </Button>
  );
}

export default CartButton;
