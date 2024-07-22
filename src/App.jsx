import Layout from './components/Layout/Layout.jsx';
import Products from './components/Shop/Products/Products.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
  return (
    <>
      <Cart />
      <Layout>
        <Products />
      </Layout>
    </>
  );
}

export default App;
