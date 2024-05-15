import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../store/ui-slice.js';
import Button from '../UI/Button/Button.jsx';
import ButtonIcon from '../UI/Button/ButtonIcon.jsx';
import classes from '../UI/Button/Button.module.scss';

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
      <ButtonIcon
        modifier='cart'
        width='20'
        height='22'
      />
    </Button>
  );
}

export default CartButton;
