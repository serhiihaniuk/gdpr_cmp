import {useTypedSelector} from '../../hooks/useTypedSelector';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Router from '../Router/Router';
import './Cmp.scss';
import FocusTrap from '../FocusTrap';

const Cmp = () => {
  const route = useTypedSelector((state) => state.appState.route);
  return (
    <FocusTrap cssSelector={'.cmp__popup'} initialFocus={".cmp__popup"}>
      <div className="cmp__wrapper">
        <div className="cmp__popup" tabIndex={0} role="dialog" aria-label="zarządzanie zgodami">
          <Header />
          <main className="cmp__main">
            <Router route={route} />
          </main>
          <Footer />
        </div>
      </div>
    </FocusTrap>
  );
};

export default Cmp;
