import PageHeader from './components/Layout/PageHeader.jsx';
import PageMain from './components/Layout/PageMain.jsx';
import Products from './components/Shop/Products/Products.jsx';
import Cart from './components/Cart/Cart.jsx';

function App() {
  return (
    <>
      <Cart />
      <PageHeader />
      <PageMain>
        <Products />
      </PageMain>
    </>
  );
}

export default App;
