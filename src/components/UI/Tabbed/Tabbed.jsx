import { useState } from 'react';

import TabList from './TabList/TabList.jsx';
import TabPanel from './TabPanel/TabPanel.jsx';
import classes from './Tabbed.module.scss';

function Tabbed({
  tabbedSectionId,
  titleId,
  tabs = [],
  panels = []
}) {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabIdStart = tabbedSectionId + '-tab-';
  const panelIdStart = tabbedSectionId + '-tabpanel-';

  function handleTabSelect(index) {
    setSelectedTab(index);
  }

  const tabPanels = panels.map((item, i) => (
    <TabPanel
      key={panelIdStart + (i + 1)}
      id={panelIdStart + (i + 1)}
      className={classes.tabbed__panel}
      ariaLabelledby={tabIdStart + (i + 1)}
      hidden={selectedTab !== i}
    >
      {item}
    </TabPanel>
  ));

  return (
    <div className={classes.tabbed}>
      <TabList
        tabIdStart={tabIdStart}
        panelIdStart={panelIdStart}
        className={classes.tabbed__list}
        names={tabs}
        selectedTab={selectedTab}
        onTabSelect={handleTabSelect}
        ariaLabelledby={titleId}
      />
      {tabPanels}
    </div>
  );
}

export default Tabbed;
