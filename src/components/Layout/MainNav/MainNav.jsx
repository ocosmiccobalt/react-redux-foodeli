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

  function handleNavBlur(evt) {
    const navContainsFocus = evt.currentTarget.contains(evt.relatedTarget);

    if (!navContainsFocus) {
      setExpanded(false);
    }
  }

  return (
    <nav
      className={`${className} ${classes['main-nav']}`}
      aria-label='Primary'
      onBlur={handleNavBlur}
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
