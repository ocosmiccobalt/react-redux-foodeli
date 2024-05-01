function TabPanel({
  id,
  className,
  ariaLabelledby,
  hidden,
  children
}) {
  return (
    <div
      id={id}
      className={className}
      role='tabpanel'
      aria-labelledby={ariaLabelledby}
      hidden={hidden}
    >
      {children}
    </div>
  );
}

export default TabPanel;
