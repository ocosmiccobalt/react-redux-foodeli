function CarouselSlide({
  className,
  ariaLabel,
  hidden,
  children
}) {
  return (
    <div
      className={className}
      role='group'
      aria-label={ariaLabel}
      aria-roledescription='slide'
      hidden={hidden}
    >
      {children}
    </div>
  );
}

export default CarouselSlide;
