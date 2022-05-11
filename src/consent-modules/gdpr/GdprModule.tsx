import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const GdprModule = () => {
  const state = useTypedSelector((state) => state.gdpr);
  const dispatch = useDispatch();

  return (
    <div>
      This is regular gdpr module
      <ul>
        <li>
          <label>
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
            GDPR Purpose 1
          </label>
        </li>
        <li>
          <label>
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
            GDPR Purpose 2
          </label>
        </li>
        <li>
          <label>
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
            GDPR Purpose 3
          </label>
        </li>
      </ul>
    </div>
  );
};

export default GdprModule;
