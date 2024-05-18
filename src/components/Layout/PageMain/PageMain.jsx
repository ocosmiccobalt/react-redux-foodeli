import Intro from '../Intro/Intro.jsx';
import Services from '../Services/Services.jsx';
import classes from './PageMain.module.scss';

function PageMain({ children }) {
  return (
    <main
      className={classes['page-main']}
    >
      <Intro id='why' />
      <Services id='services' />
      {children}
    </main>
  );
}

export default PageMain;
