function TabPanel({
  id,
  ariaLabelledby,
  hidden,
  children
}) {
  return (
    <div
      id={id}
      role='tabpanel'
      aria-labelledby={ariaLabelledby}
      hidden={hidden}
    >
      {children}
    </div>
  );
}

export default TabPanel;
