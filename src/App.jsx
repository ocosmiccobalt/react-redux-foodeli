import PageHeader from './components/Layout/PageHeader.jsx';
import Products from './components/Shop/Products/Products.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
  return (
    <>
      <Cart />
      <PageHeader />
      <main>
        <h1>Claim Best Offer on Fast <i>Food</i> & <i>Restaurants</i></h1>
        <Products />
      </main>
    </>
  );
}

export default App;
