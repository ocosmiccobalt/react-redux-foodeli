import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice.js';
import Tabbed from '../UI/Tabbed/Tabbed.jsx';

const DUMMY_PRODUCTS = [
  [
    {
      id: 'b1',
      title: 'Burger 1',
      price: 3.59
    },
    {
      id: 'b2',
      title: 'Burger 2',
      price: 4.49
    },
    {
      id: 'b3',
      title: 'Burger 3',
      price: 3.29
    },
    {
      id: 'b4',
      title: 'Burger 4',
      price: 2.99
    },
    {
      id: 'b5',
      title: 'Burger 5',
      price: 4.09
    }
  ],
  [
    {
      id: 'p1',
      title: 'Pizza 1',
      price: 6.59
    },
    {
      id: 'p2',
      title: 'Pizza 2',
      price: 7.49
    },
    {
      id: 'p3',
      title: 'Pizza 3',
      price: 6.29
    },
    {
      id: 'p4',
      title: 'Pizza 4',
      price: 5.99
    },
    {
      id: 'p5',
      title: 'Pizza 5',
      price: 7.09
    }
  ],
  [
    {
      id: 'c1',
      title: 'Cupcake 1',
      price: 2.59
    },
    {
      id: 'c2',
      title: 'Cupcake 2',
      price: 4.09
    },
    {
      id: 'c3',
      title: 'Cupcake 3',
      price: 2.19
    },
    {
      id: 'c4',
      title: 'Cupcake 4',
      price: 1.99
    },
    {
      id: 'c5',
      title: 'Cupcake 5',
      price: 2.39
    }
  ],
  [
    {
      id: 'r1',
      title: 'Ramen 1',
      price: 3.29
    },
    {
      id: 'r2',
      title: 'Ramen 2',
      price: 4.09
    },
    {
      id: 'r3',
      title: 'Ramen 3',
      price: 3.09
    },
    {
      id: 'r4',
      title: 'Ramen 4',
      price: 2.79
    },
    {
      id: 'r5',
      title: 'Ramen 5',
      price: 3.59
    }
  ],
  [
    {
      id: 'i1',
      title: 'Ice Cream 1',
      price: 4.09
    },
    {
      id: 'i2',
      title: 'Ice Cream 2',
      price: 2.59
    },
    {
      id: 'i3',
      title: 'Ice Cream 3',
      price: 2.49
    },
    {
      id: 'i4',
      title: 'Ice Cream 4',
      price: 2.29
    },
    {
      id: 'i5',
      title: 'Ice Cream 5',
      price: 1.99
    }
  ]
];

const CATEGORIES = ['burger', 'pizza', 'cupcake', 'ramen', 'ice-cream'];

function Products() {
  const tabbedSectionId = 'menu';
  const titleId = 'menu-title';

  const dispatch = useDispatch();

  function handleCartItemAdd(item) {
    dispatch(cartActions.addItemToCart({ ...item, quantity: 1 }));
  }

  const tabbedItems = DUMMY_PRODUCTS.map((arr, i) => {
    const productItems = arr.map((p) => (
      <li key={p.id}>
        <article>
          <h3>{p.title}</h3>
          <p>{`$${p.price}`}</p>
          <button
            type='button'
            onClick={handleCartItemAdd.bind(null, p)}
          >
            Order now
          </button>
        </article>
      </li>
    ));

    return (
      <ul key={CATEGORIES[i]}>
        {productItems}
      </ul>
    );
  });

  return (
    <section className='products' id={tabbedSectionId}>
      <div className='products__wrapper wrapper'>
        <h2 className='products__title' id={titleId}>Our menu</h2>
        <p className='products__subtitle'>Menu That Always Makes You Fall In Love</p>
        <Tabbed
          tabbedSectionId={tabbedSectionId}
          titleId={titleId}
          tabs={CATEGORIES}
          panels={tabbedItems}
        />
      </div>
    </section>
  );
}

export default Products;
