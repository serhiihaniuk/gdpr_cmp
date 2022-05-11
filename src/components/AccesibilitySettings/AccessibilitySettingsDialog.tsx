import './AccessibilitySettings.scss';
import {FunctionComponent, useEffect, useRef, useState} from 'preact/compat';
import * as Icons from './assets/Icons';
import FocusTrap from '../FocusTrap';

const AccessibilitySettingsDialog: FunctionComponent<{
  isVisible: boolean;
  closeDialog: () => void;
}> = ({isVisible, closeDialog}) => {
  const [fontSize, setFontSize] = useState(14);
  const [theme, setTheme] = useState('light');
  const increaseButton = useRef<HTMLButtonElement>(null);
  const decreaseButton = useRef<HTMLButtonElement>(null);
  const max = 24;
  const min = 12;
  const resizeHandler = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setFontSize(fontSize + 1);
    }
    if (action === 'decrease') {
      setFontSize(fontSize - 1);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  // change variable --main_font_size in .cmp__popup class
  useEffect(() => {
    const cmpPopup = document.querySelector('.cmp') as any;
    if (cmpPopup) {
      cmpPopup.style.setProperty('--main_font_size', `${fontSize}px`);
    }
    if (fontSize === max && decreaseButton.current) {
      decreaseButton.current.focus();
    }

    if (fontSize === min && increaseButton.current) {
      increaseButton.current.focus();
    }
  }, [fontSize]);
  useEffect(() => {
    const cmpPopup = document.querySelector('.cmp') as HTMLElement | null;
    if (cmpPopup) {
      if (theme === 'light') {
        cmpPopup.classList.remove('dark');
        cmpPopup.classList.add('light');
      }
      if (theme === 'dark') {
        cmpPopup.classList.remove('light');
        cmpPopup.classList.add('dark');
      }
    }
  }, [theme]);
  if (!isVisible) return null;

  return (
    <FocusTrap cssSelector={'#accessibility-dialog'} initialFocus={".accessibility-dialog"}>
      <div
        aria-label="ustawienia dostępności"
        role="dialog"
        id={'accessibility-dialog'}
        className="accessibility-dialog"
        aria-modal="true"
        tabIndex={0}
      >
        <button
          aria-label="zmień scheme kolorystyczną"
          className="button button--secondary"
          onClick={toggleTheme}
        >
          <Icons.Color />
        </button>

        <button
          className={`button button--primary ${fontSize === min ? 'button--disabled' : ''}`}
          onClick={() => {
            resizeHandler('decrease');
          }}
          disabled={fontSize === min}
          ref={decreaseButton}
        >
          Decrease font <Icons.Font />
        </button>
        <button
          className={`button button--primary ${fontSize === max ? 'button--disabled' : ''}`}
          onClick={() => {
            resizeHandler('increase');
          }}
          disabled={fontSize === max}
          ref={increaseButton}
        >
          Increase font <Icons.Font />
        </button>
        <button className={`button button--close`} onClick={closeDialog}>
          Close
        </button>
      </div>
    </FocusTrap>
  );
};
export default AccessibilitySettingsDialog;
