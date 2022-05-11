import Cmp from './components/Cmp/Cmp';
import {useEffect, useState} from 'preact/compat';

const typedWindow = window as Window & typeof globalThis & {
  showConsentTool: () => void;
}
export function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const btn = document.getElementById('btn') as HTMLButtonElement;
    typedWindow.showConsentTool = () => {setIsVisible(false)}
    if (btn) {
      btn.addEventListener('click', () => {
        setIsVisible(!isVisible);
      });
    }
  });
  if (!isVisible) return null;
  return (
    <div className="cmp" >
      <Cmp />
    </div>
  );
}
