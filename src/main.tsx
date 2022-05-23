import {h, render} from 'preact';
import {App} from './app';
import './index.scss';
import {Provider} from 'react-redux';
import {store} from './state';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.querySelector('body')!
);
