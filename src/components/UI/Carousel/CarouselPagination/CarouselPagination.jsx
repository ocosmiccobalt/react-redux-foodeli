import Button from '../../Button.jsx';

function CarouselPagination({
  className,
  labels = [],
  current,
  onSlideSelect
}) {
  const bullets = labels.map((label, i) => (
    <Button
      key={i}
      modifiers={['bullet']}
      ariaLabel={label}
      ariaDisabled={i === current}
      ariaCurrent={i === current}
      onClick={onSlideSelect.bind(null, i)}
    />
  ));

  return (
    <div
      className={className}
      role='group'
      aria-label='Choose slide to display'
    >
      {bullets}
    </div>
  );
}

export default CarouselPagination;
