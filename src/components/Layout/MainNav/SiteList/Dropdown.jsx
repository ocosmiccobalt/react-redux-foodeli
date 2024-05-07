import { useState, useEffect } from 'react';

import classes from './Dropdown.module.scss';

function Dropdown({
  Container = 'li',
  className = '',
  title,
  menuId,
  links = [],
  navIsClosed
}) {
  const [expanded, setExpanded] = useState(false);

  const buttonSubClass = expanded ? classes['dropdown__title--open'] : '';
  const menuSubClass = expanded ? classes['dropdown__list--open'] : '';

  useEffect(() => {
    if (navIsClosed) {
      setExpanded(false);
    }
  }, [navIsClosed]);

  function handleToggleMenu() {
    setExpanded((prevExpanded) => !prevExpanded);
  }

  const items = links.map((link, i) => (
    <li key={i} className={classes.dropdown__item}>
      <a
        className={classes.dropdown__link}
        href={link.href}
      >
        {link.name}
      </a>
    </li>
  ));

  return (
    <Container className={`${className} ${classes.dropdown}`}>
      <button
        className={`${classes.dropdown__title} ${buttonSubClass}`}
        type='button'
        aria-controls={menuId}
        aria-expanded={expanded}
        onClick={handleToggleMenu}
      >
        {title}
      </button>
      <ul
        className={`${classes.dropdown__list} ${menuSubClass}`}
        id={menuId}
        role='list'
      >
        {items}
      </ul>
    </Container>
  );
}

export default Dropdown;
