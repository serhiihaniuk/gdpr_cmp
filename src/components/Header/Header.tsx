import './Header.scss';
import {useState} from 'preact/compat';
import AccessibilitySettingsDialog from '../AccesibilitySettings/AccessibilitySettingsDialog';
import * as Icons from '../AccesibilitySettings/assets/Icons';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisible = () => {
    setIsVisible((v) => !v);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <div className="logo" />
      </div>
      <button className="button settings"onClick={toggleVisible}>
        Ustawienia <Icons.Settings />
      </button>
      <AccessibilitySettingsDialog isVisible={isVisible} closeDialog={toggleVisible} />
    </header>
  );
};

export default Header;
