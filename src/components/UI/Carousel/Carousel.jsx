import { useReducer } from 'react';

import CarouselButton from './CarouselButton/CarouselButton.jsx';
import CarouselPagination from './CarouselPagination/CarouselPagination.jsx';
import CarouselSlide from './CarouselSlide/CarouselSlide.jsx';
import classes from './Carousel.module.scss';

const CAROUSEL_CONFIG = {
  shiftInPercent: 58.72,
  gutterInPercent: 4.36
};

const INITIAL_STATE = {
  position: 0,
  current: 0,
  nearest: 1
};

function carouselReducer(state, action) {
  const { shift, gutter, length } = action;
  const minPosition = -(shift * length) + gutter + 100;
  const maxPosition = 0;

  if (action.type === 'SELECT_SLIDE') {
    const i = action.index;

    if (state.current === i || i < 0 || i > length - 1) {
      return state;
    } else {
      let newPosition = -(shift * i);
      newPosition = Math.max(newPosition, minPosition);
      const newNearest = (i === length - 1) ? (i - 1) : (i + 1);

      return {
        position: newPosition,
        current: i,
        nearest: newNearest
      };
    }
  }

  if (action.type === 'MOVE_TO_PREV') {
    if (state.current === 0) {
      return state;
    } else {
      const i = state.current - 1;

      let newPosition = state.position + shift;
      newPosition = Math.min(newPosition, maxPosition);
      const newNearest = (i === 0) ? (i + 1) : (state.nearest - 1);

      return {
        position: newPosition,
        current: i,
        nearest: newNearest
      };
    }
  }

  if (action.type === 'MOVE_TO_NEXT') {
    if (state.current === length - 1) {
      return state;
    } else {
      const i = state.current + 1;

      let newPosition = state.position - shift;
      newPosition = Math.max(newPosition, minPosition);
      const newNearest = (i === length - 1) ? (i - 1) : (state.nearest + 1);

      return {
        position: newPosition,
        current: i,
        nearest: newNearest
      };
    }
  }

  return INITIAL_STATE;
}

function Carousel({
  ariaLabel,
  listId,
  items,
  config = CAROUSEL_CONFIG
}) {
  const [state, dispatch] = useReducer(carouselReducer, INITIAL_STATE);
  const { position, current, nearest } = state;

  const {
    shiftInPercent: shift,
    gutterInPercent: gutter
  } = config;
  /*
    The data above could be received not from config,
    but from CSS style declaration for different breakpoints
    (e.g. via getPropertyValue() method).
    So we would have to keep an eye on the resize.
  */

  const transform = `translateX(${position}%)`;
  const atFirstSlide = current < 1;
  const atLastSlide = current >= items.length - 1;

  function handleSlideSelect(index) {
    dispatch({ type: 'SELECT_SLIDE', index, shift, gutter, length: items.length });
  }

  function handleMoveToPrevSlide() {
    dispatch({ type: 'MOVE_TO_PREV', shift, gutter, length: items.length });
  }

  function handleMoveToNextSlide() {
    dispatch({ type: 'MOVE_TO_NEXT', shift, gutter, length: items.length });
  }

  const controls = (
    <>
      <CarouselButton
        className={classes.carousel__prev}
        prev={true}
        ariaControls={listId}
        ariaDisabled={atFirstSlide}
        onClick={handleMoveToPrevSlide}
      />
      <CarouselButton
        className={classes.carousel__next}
        ariaControls={listId}
        ariaDisabled={atLastSlide}
        onClick={handleMoveToNextSlide}
      />
    </>
  );

  const bulletLabels = items.map((item) => item.label);

  const carouselItems = items.map(({ label, content }, i) => (
    <li
      key={i}
      className={classes.carousel__item}
      aria-live='polite'
    >
      <CarouselSlide
        className={classes.carousel__slide}
        ariaLabel={label}
        hidden={i !== current && i !== nearest}
      >
        {content}
      </CarouselSlide>
    </li>
  ));

  return (
    <section
      className={classes.carousel}
      aria-roledescription='carousel'
      aria-label={ariaLabel}
    >
      <div className={classes.carousel__controls}>
        {controls}
      </div>
      <CarouselPagination
        className={classes.carousel__pagination}
        labels={bulletLabels}
        current={current}
        onSlideSelect={handleSlideSelect}
      />
      <div className={classes.carousel__inner}>
        <ul
          className={classes.carousel__list}
          id={listId}
          role='list'
          style={{ transform: transform }}
        >
          {carouselItems}
        </ul>
      </div>
    </section>
  );
}

export default Carousel;
