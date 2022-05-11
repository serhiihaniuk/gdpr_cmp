import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {redirectAction, Routes} from '../../state/service';
import './Footer.scss';

const Footer = () => {
  const route = useTypedSelector((state) => state.appState.route);
  const tWindow = window as Window & typeof globalThis & {
    showConsentTool: () => void;
  }
  const dispatch = useDispatch();
  return (
    <footer className="footer">
      {route === Routes.Intro && (
        <>
          <button
            className="button button--secondary"
            onClick={() => {
              dispatch(redirectAction(Routes.Details));
            }}
          >
              Ustawienia zaawansowane
          </button>
          <button
            className="button button--primary"
            id="accept-button"
            onClick={() => {
              dispatch({type: 'ACCEPT_ALL'});
              tWindow.showConsentTool()
            }}
          >
              Przejdź do serwisu
          </button>
        </>
      )}
      {route === Routes.Details && (
        <>
          <button
            className="button button--secondary"
            onClick={() => {
              dispatch(redirectAction(Routes.Intro));
            }}
          >
            Wstecz
          </button>
          <button
            className="button button--primary"
            onClick={() => {
              dispatch({type: 'SAVE_CHANGES'});
              tWindow.showConsentTool()
            }}
          >
            Zapisz i zamknij
          </button>
        </>
      )}
    </footer>
  );
};

export default Footer;
