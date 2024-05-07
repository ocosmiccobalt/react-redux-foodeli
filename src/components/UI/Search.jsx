import { useState } from 'react';

import classes from './Search.module.scss';

function Search({
  className = '',
  action = '#',
  fieldId
}) {
  const [hasFocus, setHasFocus] = useState(false);
  const [buttonIsInTabOrder, setButtonIsInTabOrder] = useState(false);

  const formSubClass = hasFocus ? classes['search--hasfocus'] : '';
  const formClassName = `${className} ${classes.search} ${formSubClass}`;

  const icon = (
    <svg
      className={classes.search__icon}
      width='22'
      height='22'
      aria-hidden='true'
      focusable='false'
    >
      <use xlinkHref='#icon-search'></use>
    </svg>
  );

  function handleFieldEvent(evt) {
    const value = evt.target.value.trim();

    setButtonIsInTabOrder(true);

    const emptyFieldBlur = (value === '') && (evt.type === 'blur');
    const emptyFieldTab =
      (value === '') &&
      (evt.type === 'keydown') &&
      (evt.key === 'Tab');

    if (emptyFieldBlur || emptyFieldTab) {
      setButtonIsInTabOrder(false);
    }
  }

  function handleFormFocus() {
    setHasFocus(true);
  }

  function handleFormBlur(evt) {
    const formContainsFocus = evt.currentTarget.contains(evt.relatedTarget);

    if (!formContainsFocus) {
      setHasFocus(false);
    }
  }

  return (
    <form
      className={formClassName}
      action={action}
      method='get'
      role='search'
      onFocus={handleFormFocus}
      onBlur={handleFormBlur}
    >
      <label
        className={classes.search__label}
        htmlFor={fieldId}
      >
        <span className='visually-hidden'>Search Foodeli</span>
        {icon}
      </label>

      <input
        className={classes.search__input}
        type='search'
        id={fieldId}
        name='q'
        placeholder='Search'
        onFocus={handleFieldEvent}
        onBlur={handleFieldEvent}
        onKeyDown={handleFieldEvent}
      />

      <button
        className={classes.search__button}
        type='submit'
        aria-label='Search'
        tabIndex={buttonIsInTabOrder ? '0' : '-1'}
      >
        {icon}
      </button>
    </form>
  );
}

export default Search;
