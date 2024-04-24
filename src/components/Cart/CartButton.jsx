import Button from '../UI/Button.jsx';
import classes from '../UI/Button.module.scss';

function CartButton({ className = '' }) {
  return (
    <Button
      className={className}
      modifiers={['cart']}
    >
      <span className='visually-hidden'>Open the Cart:</span>
      <span className={classes.button__amount}>
        4
      </span>
      <svg
        className={`${classes.button__icon} ${classes['button__icon--cart']}`}
        width='20'
        height='22'
        aria-hidden='true'
        focusable='false'
      >
        <use xlinkHref='#icon-cart'></use>
      </svg>
    </Button>
  );
}

export default CartButton;
