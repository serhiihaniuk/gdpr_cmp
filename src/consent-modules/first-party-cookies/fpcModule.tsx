import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const FpcModule = () => {
  const state = useTypedSelector((state) => state.fpc);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 id="cookies">Manage Consent Preferences</h3>
      <ul role="group" aria-label="Zarządzaj preferencjami plików cookie">
        <li>
          <label className="gui-switch">
            <input
              type="checkbox"
              checked={state[1]}
              aria-checked={state[1]}
              role="switch"
              onChange={() => {
                dispatch({
                  type: 'CHANGE_FCP_STATE',
                  payload: {1: !state[1]},
                });
              }}
            />{' '}
            Strictly Necessary Cookies
          </label>
        </li>
        <li>
          <label className="gui-switch">
            <input
              type="checkbox"
              checked={state[2]}
              aria-checked={state[2]}
              role="switch"
              onChange={() => {
                dispatch({
                  type: 'CHANGE_FCP_STATE',
                  payload: {2: !state[2]},
                });
              }}
            />{' '}
            Analytics Cookies
          </label>
        </li>
        <li>
          <label className="gui-switch">
            <input
              type="checkbox"
              checked={state[3]}
              aria-checked={state[3]}
              role="switch"
              onChange={() => {
                dispatch({
                  type: 'CHANGE_FCP_STATE',
                  payload: {3: !state[3]},
                });
              }}
            />{' '}
            Targeting Cookies
          </label>
        </li>
      </ul>
    </div>
  );
};

export default FpcModule;
