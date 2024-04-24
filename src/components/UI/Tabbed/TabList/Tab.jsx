import { useRef, useEffect } from 'react';

import Button from '../../Button.jsx';

function Tab({
  id,
  index,
  modifier,
  focused,
  ariaControls,
  ariaSelected,
  tabIndex,
  children
}) {
  const tab = useRef();

  useEffect(() => {
    const button = tab.current;

    if (focused) {
      button.focus();
    }

    return () => button.blur();
  }, [focused]);

  return (
    <Button
      id={id}
      index={index}
      modifiers={['tab', modifier]}
      role='tab'
      ariaControls={ariaControls}
      ariaSelected={ariaSelected}
      tabIndex={tabIndex}
      ref={tab}
    >
      {children}
    </Button>
  );
}

export default Tab;
