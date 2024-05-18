import Button from '../UI/Button/Button.jsx';
import Picture from '../UI/Picture/Picture.jsx';
import Courier from '../Shop/Courier/Courier.jsx';
import Customers from '../Customers/Customers.jsx';
import PopularProduct from '../Shop/Popular/PopularProduct.jsx';
import classes from './Intro.module.scss';

const INTRO_PIC = {
  srcName: 'intro-dish',
  size: {
    mWidth: 335,
    mHeight: 325,
    dWidth: 670,
    dHeight: 650
  },
  alt: 'Fresh vegetable salad with feta cheese and herbs.',
  webWitals: {
    fetchpriority: "high"
  }
};

const DEFAULT_COURIER_NAME = 'Richard Watson';

function Intro({ id }) {
  const buttons = (
    <>
      <Button
        className={classes.intro__button}
        modifiers={['started']}
      >
        Get Started
      </Button>
      <Button
        className={classes.intro__button}
        modifiers={['video']}
      >
        Watch Video
      </Button>
    </>
  );

  const inner = (
    <div className={classes.intro__inner}>
      <h1 className={classes.intro__title}>
        Claim Best Offer on Fast <i>Food</i> & <i>Restaurants</i>
      </h1>
      <p className={classes.intro__tagline}>
        More than Faster
      </p>
      <p className={classes.intro__description}>
        Our job is to filling your tummy with delicious food and  with fast and free delivery
      </p>
      <div className={classes.intro__actions}>
        {buttons}
      </div>
    </div>
  );

  const illustration = (
    <p className={classes.intro__illustration}>
      <Picture
        srcName={INTRO_PIC.srcName}
        size={INTRO_PIC.size}
        alt={INTRO_PIC.alt}
        imgClassName={classes.intro__image}
        webWitals={INTRO_PIC.webWitals}
      />
    </p>
  );

  return (
    <section
      className={classes.intro}
      id={id}
    >
      <div className={`${classes.intro__wrapper} wrapper`}>
        {inner}
        {illustration}
        <Courier
          className={classes.intro__courier}
          name={DEFAULT_COURIER_NAME}
        />
        <Customers className={classes.intro__customers} />
        <PopularProduct className={classes.intro__product} />
      </div>
    </section>
  );
}

export default Intro;
