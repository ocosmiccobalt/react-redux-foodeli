import { useState } from 'react';

import SiteList from './SiteList/SiteList.jsx';
import classes from './MainNav.module.scss';

function MainNav({ className = '' }) {
  const [expanded, setExpanded] = useState(false);

  const buttonSubClass = expanded ? classes['main-nav__toggle--open'] : '';
  const menuId = 'site-list';

  function handleToggleNav() {
    setExpanded((prevExpanded) => !prevExpanded);
  }

  return (
    <nav
      className={`${className} ${classes['main-nav']}`}
      aria-label='Primary'
    >
      <button
        className={`${classes['main-nav__toggle']} ${buttonSubClass}`}
        type='button'
        aria-controls={menuId}
        aria-expanded={expanded}
        aria-label='Open'
        onClick={handleToggleNav}
      />
      <SiteList
        id={menuId}
        open={expanded}
      />
    </nav>
  );
}

export default MainNav;
