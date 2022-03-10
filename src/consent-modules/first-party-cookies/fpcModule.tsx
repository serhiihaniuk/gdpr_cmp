import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const FpcModule = () => {
  const state = useTypedSelector((state) => state.fpc);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={state[1]}
            onChange={() => {
              dispatch({
                type: 'CHANGE_FCP_STATE',
                payload: { 1: !state[1] },
              });
            }}
          />{' '}
          Custom Purpose 1
        </li>
        <li>
          <input
            type="checkbox"
            checked={state[2]}
            onChange={() => {
              dispatch({
                type: 'CHANGE_FCP_STATE',
                payload: { 2: !state[2] },
              });
            }}
          />{' '}
          Custom Purpose 2
        </li>
        <li>
          <input
            type="checkbox"
            checked={state[3]}
            onChange={() => {
              dispatch({
                type: 'CHANGE_FCP_STATE',
                payload: { 3: !state[3] },
              });
            }}
          />{' '}
          Custom Purpose 3
        </li>
      </ul>
    </div>
  );
};

export default FpcModule;
