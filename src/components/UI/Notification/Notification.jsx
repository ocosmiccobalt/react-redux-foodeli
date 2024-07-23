import classes from './Notification.module.scss';

function Notification({ status, title, message }) {
  let subClass = '';

  if (status === 'error') {
    subClass = classes['notification--error'];
  }

  if (status === 'success') {
    subClass = classes['notification--success'];
  }

  const className = `${classes.notification} ${subClass}`;

  return (
    <section
      className={className}
      aria-live='polite'
    >
      <h2 className={classes.notification__title}>{title}</h2>
      <p className={classes.notification__message}>{message}</p>
    </section>
  );
}

export default Notification;
