import { useDispatch } from 'react-redux';

import { cartActions } from '../../../store/cart-slice.js';
import Tabbed from '../../UI/Tabbed/Tabbed.jsx';
import Carousel from '../../UI/Carousel/Carousel.jsx';
import useHttp from '../../../hooks/use-http.js';
import classes from './Products.module.scss';

const HOST = 'http://localhost:3000';
const REQUEST_CONFIG = {};
const INITIAL_DATA = [];

const CATEGORIES = ['burger', 'pizza', 'cupcake', 'ramen', 'ice-cream'];

const TABBED_SECTION_ID = 'menu';
const TITLE_ID = 'menu-title';

function Products() {
  const dispatch = useDispatch();

  const {
    data: products,
    isLoading,
    error: httpError
  } = useHttp(HOST + '/products', REQUEST_CONFIG, INITIAL_DATA);

  if (isLoading) {
    return (
      <h2 style={{ textAlign: 'center' }}>Fetching products...</h2>
    );
  }

  if (httpError) {
    return (
      <h2 style={{ textAlign: 'center' }}>{httpError}</h2>
    );
  }

  function handleCartItemAdd(item) {
    dispatch(cartActions.addItemToCart({ ...item, quantity: 1 }));
  }

  const tabbedItems = CATEGORIES.map((category) => {
    const itemsOfCategory = products
      .filter((product) => category === product.category)
      .map((product) => ({
        label: product.title,
        content: (
          <>
            <h3>{product.title}</h3>
            <p>{`$${product.price}`}</p>
            <button
              type='button'
              onClick={handleCartItemAdd.bind(null, product)}
            >
              Order now
            </button>
          </>
        )
      }));

    const ariaLabel = category
      .split('-')
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(' ');

    return (
      <Carousel
        key={category}
        ariaLabel={ariaLabel}
        listId={category + '-carousel-list'}
        items={itemsOfCategory}
      />
    );
  });

  return (
    <section
      className={classes.products}
      id={TABBED_SECTION_ID}
    >
      <div className={`${classes.products__wrapper} wrapper`}>
        <h2
          className={classes.products__title}
          id={TITLE_ID}
        >
          Our menu
        </h2>
        <p className={classes.products__subtitle}>
          Menu That Always Makes You Fall In Love
        </p>
        <Tabbed
          tabbedSectionId={TABBED_SECTION_ID}
          titleId={TITLE_ID}
          tabs={CATEGORIES}
          panels={tabbedItems}
        />
      </div>
    </section>
  );
}

export default Products;
