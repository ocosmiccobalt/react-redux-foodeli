import Picture from '../../UI/Picture/Picture.jsx';
import CallButton from './CallButton.jsx';
import classes from './Courier.module.scss';

const INFO = 'Food Courier';

const AVATAR_PIC = {
  srcName: 'avatar-courier',
  oldType: 'png',
  size: {
    width: 47,
    height: 47
  },
  noMedia: true,
  alt: `Your courier's avatar.`
};

function Courier({
  className = '',
  name
}) {
  const profile = (
    <div className={classes.courier__profile}>
      <h2 className={classes.courier__name}>
        {name}
      </h2>
      <p className={classes.courier__info}>
        {INFO}
      </p>
    </div>
  );

  const avatar = (
    <p className={classes.courier__avatar}>
      <Picture
        srcName={AVATAR_PIC.srcName}
        oldType={AVATAR_PIC.oldType}
        size={AVATAR_PIC.size}
        noMedia={AVATAR_PIC.noMedia}
        alt={AVATAR_PIC.alt}
        imgClassName={classes.courier__image}
      />
    </p>
  );

  return (
    <article className={`${className} ${classes.courier}`}>
      {profile}
      {avatar}
      <CallButton
        className={classes.courier__button}
      />
    </article>
  );
}

export default Courier;
