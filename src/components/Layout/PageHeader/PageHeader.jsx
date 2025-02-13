import Logo from '../Logo/Logo.jsx';
import MainNav from '../MainNav/MainNav.jsx';
import Search from '../../UI/Search/Search.jsx';
import CartButton from '../../Cart/CartButton.jsx';
import LoginButton from '../../Login/LoginButton.jsx';
import classes from './PageHeader.module.scss';

function PageHeader() {
  const SEARCH_FIELD_ID = 'search-field';

  const getButtonClass = (modifier) => (
    `${
      classes['page-header__button']
    } ${
      classes['page-header__button--' + modifier]
    }`
  );
  const cartButtonClass = getButtonClass('cart');
  const loginButtonClass = getButtonClass('login');

  return (
    <header className={classes['page-header']}>
      <div className={`wrapper ${classes['page-header__wrapper']}`}>
        <Logo className={classes['page-header__logo']} />
        <MainNav className={classes['page-header__nav']} />
        <div className={classes['page-header__user-tools']}>
          <Search
            className={classes['page-header__search']}
            fieldId={SEARCH_FIELD_ID}
          />
          <CartButton className={cartButtonClass} />
          <LoginButton className={loginButtonClass} />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
