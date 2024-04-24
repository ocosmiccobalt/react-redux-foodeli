import { useState } from 'react';

import Tab from './Tab.jsx';

function TabList({
  tabIdStart,
  panelIdStart,
  names = [],
  selectedTab,
  onTabSelect,
  ariaLabelledby
}) {
  const [focusedTab, setFocusedTab] = useState(null);

  const tabs = names.map((name, i) => {
    const selected = selectedTab === i;
    const tabIndex = selectedTab === i ? 0 : -1;
    const focused = focusedTab === i;
    const title = name
      .split('-')
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(' ');

    return (
      <Tab
        id={tabIdStart + (i + 1)}
        key={tabIdStart + (i + 1)}
        index={i}
        modifier={name}
        focused={focused}
        ariaControls={panelIdStart + (i + 1)}
        ariaSelected={selected}
        tabIndex={tabIndex}
      >
        {title}
      </Tab>
    );
  });

  function handleTabListClick(evt) {
    const target = evt.target.closest('[role="tab"]');

    if (target) {
      const index = +target.dataset.index;
      evt.preventDefault();
      onTabSelect(index);
    }
  }

  function handleTabListKeyDown(evt) {
    const target = evt.target;

    if (target) {
      let index = +target.dataset.index;

      const handleKeyDown = (index) => {
        evt.preventDefault();
        setFocusedTab(index);
      };

      switch (evt.key) {
        case 'ArrowRight':
          index++;
          // If we're at the end, go to the start
          if (index >= tabs.length) {
            index = 0;
          }
          handleKeyDown(index);
          break;

        case 'ArrowLeft':
          index--;
          // If we're at the start, move to the end
          if (index < 0) {
            index = tabs.length - 1;
          }
          handleKeyDown(index);
          break;

        case 'End':
          handleKeyDown(tabs.length - 1);
          break;

        case 'Home':
          handleKeyDown(0);
          break;

        default:
          break;
      }
    }
  }

  return (
    <div
      role='tablist'
      aria-labelledby={ariaLabelledby}
      onClick={handleTabListClick}
      onKeyDown={handleTabListKeyDown}
    >
      {tabs}
    </div>
  );
}

export default TabList;
