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

  const dropdownClassName = `${className} ${classes.dropdown}`

  const buttonSubClass = expanded ? classes['dropdown__title--open'] : '';
  const buttonClassName = `${classes.dropdown__title} ${buttonSubClass}`;

  const menuSubClass = expanded ? classes['dropdown__list--open'] : '';
  const menuClassName = `${classes.dropdown__list} ${menuSubClass}`;

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
    <Container className={dropdownClassName}>
      <button
        className={buttonClassName}
        type='button'
        aria-controls={menuId}
        aria-expanded={expanded}
        onClick={handleToggleMenu}
      >
        {title}
      </button>
      <ul
        className={menuClassName}
        id={menuId}
        role='list'
      >
        {items}
      </ul>
    </Container>
  );
}

export default Dropdown;
