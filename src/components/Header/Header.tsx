import './Header.scss';
import {useState} from 'preact/compat';
import AccessibilitySettingsDialog from '../AccesibilitySettings/AccessibilitySettingsDialog';
import * as Icons from '../AccesibilitySettings/assets/Icons';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const route = useTypedSelector((state) => state.appState.route);
  const toggleVisible = () => {
    setIsVisible((v) => !v);
  };
  const focusAcceptButton = () => {
    const acceptButton = document.querySelector('#accept-button') as HTMLButtonElement;
    if (acceptButton) {
      acceptButton.focus();
    }
  };
  return (
    <header className="header">
      <div className="header__logo">
        <div className="logo" aria-label="Logo onetu" role="image" />
      </div>
      {route === 'intro' && (
        <button className="button skip-btn visible-on-focus" onClick={focusAcceptButton}>
          przejdź do przycisków sterujących{' '}
        </button>
      )}
      <button className="button settings" onClick={toggleVisible}>
        Ustawienia <Icons.Settings />
      </button>
      <AccessibilitySettingsDialog isVisible={isVisible} closeDialog={toggleVisible} />
    </header>
  );
};

export default Header;
