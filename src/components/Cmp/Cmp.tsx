import {useTypedSelector} from '../../hooks/useTypedSelector';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Router from '../Router/Router';
import './Cmp.scss';
import AccessibilitySettingsDialog from '../AccesibilitySettings/AccessibilitySettingsDialog';

const Cmp = () => {
  const route = useTypedSelector((state) => state.appState.route);
  return (
    <>
      <div className="cmp__wrapper">
        <div className="cmp__popup">
          <Header />
          <main className="cmp__main">
            <Router route={route} />
          </main>
          <Footer />
        </div>
      </div>

    </>
  );
};

export default Cmp;
