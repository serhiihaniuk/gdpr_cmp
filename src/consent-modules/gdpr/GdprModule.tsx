import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const GdprModule = () => {
  const state = useTypedSelector((state) => state.gdpr);
  const dispatch = useDispatch();

  return (
    <div>
      <h3 id="gdpr">GDPR Purposes</h3>
      <ul aria-describedby="gdpr" aria-label="Cele gdpr" role="group">
        <li>
          <label className="gui-switch">
            <input
              type="checkbox"
              checked={state[1]}
              onChange={() => {
                dispatch({
                  type: 'CHANGE_GDPR_STATE',
                  payload: {1: !state[1]},
                });
              }}
            />
            Wybór podstawowych reklam
          </label>
        </li>
        <li>
          <label className="gui-switch">
            <input
              type="checkbox"
              checked={state[2]}
              onChange={() => {
                dispatch({
                  type: 'CHANGE_GDPR_STATE',
                  payload: {2: !state[2]},
                });
              }}
            />{' '}
            Tworzenie profilu spersonalizowanych reklam
          </label>
        </li>
        <li>
          <label className="gui-switch">
            <input
              type="checkbox"
              checked={state[3]}
              onChange={() => {
                dispatch({
                  type: 'CHANGE_GDPR_STATE',
                  payload: {3: !state[3]},
                });
              }}
            />{' '}
            Pomiar wydajności reklam
          </label>
        </li>
      </ul>
    </div>
  );
};

export default GdprModule;
