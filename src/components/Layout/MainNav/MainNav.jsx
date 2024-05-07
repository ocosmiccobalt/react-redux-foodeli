import { useState } from 'react';

import SiteList from './SiteList/SiteList.jsx';
import classes from './MainNav.module.scss';

function MainNav({ className = '' }) {
  const [expanded, setExpanded] = useState(false);

  const MENU_ID = 'site-list';
  const navClassName = `${className} ${classes['main-nav']}`;

  const buttonSubClass = expanded ? classes['main-nav__toggle--open'] : '';
  const buttonClassName = `${classes['main-nav__toggle']} ${buttonSubClass}`;

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
      className={navClassName}
      aria-label='Primary'
      onBlur={handleNavBlur}
    >
      <button
        className={buttonClassName}
        type='button'
        aria-controls={MENU_ID}
        aria-expanded={expanded}
        aria-label='Open'
        onClick={handleToggleNav}
      />
      <SiteList
        id={MENU_ID}
        open={expanded}
      />
    </nav>
  );
}

export default MainNav;
