import classes from './CartItem.module.scss';

function CartItem({
  title,
  price,
  quantity,
  totalPrice,
  onAdd,
  onRemove
}) {
  const formattedPrice = `$ ${price.toFixed(2)}`;
  const formattedTotalPrice = `$ ${totalPrice.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <h3 className={classes['cart-item__title']}>
        {title}
      </h3>
      <p className={classes['cart-item__price']}>{formattedPrice}</p>
      <p className={classes['cart-item__quantity']}>Quantity: {quantity}</p>
      <p className={classes['cart-item__total']}>Total Price: {formattedTotalPrice}</p>
      <div className={classes['cart-item__buttons']}>
        <button
          className={classes['cart-item__button']}
          type='button'
          aria-label='Minus one'
          onClick={onRemove}
        >
          -
        </button>
        <button
          className={classes['cart-item__button']}
          type='button'
          aria-label='Plus one'
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
