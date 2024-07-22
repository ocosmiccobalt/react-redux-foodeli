import PageHeader from './PageHeader/PageHeader.jsx';
import PageMain from './PageMain/PageMain.jsx';

function Layout({ children }) {
  return (
    <>
      <PageHeader />
      <PageMain>
        {children}
      </PageMain>
    </>
  );
}

export default Layout;
