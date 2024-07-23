import { useSelector } from 'react-redux';

import Intro from '../Intro/Intro.jsx';
import Notification from '../../UI/Notification/Notification.jsx';
import Services from '../Services/Services.jsx';
import classes from './PageMain.module.scss';

function PageMain({ children }) {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <main
      className={classes['page-main']}
    >
      <Intro id='why' />
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Services id='services' />
      {children}
    </main>
  );
}

export default PageMain;
