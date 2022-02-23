import { useState, useEffect as UE } from 'preact/hooks';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const GdprModule = () => {
	const state = useTypedSelector((state) => state.gdpr);
	const dispatch = useDispatch();

	return (
		<div>
			This is regular gdpr module
			<ul>
				<li>
					<input
						type="checkbox"
						checked={state[1]}
						onChange={() => {
							dispatch({
								type: 'CHANGE_GDPR_STATE',
								payload: { 1: !state[1] }
							});
						}}
					/>
					GDPR Purpose 1
				</li>
				<li>
					<input
						type="checkbox"
						checked={state[2]}
						onChange={() => {
							dispatch({
								type: 'CHANGE_GDPR_STATE',
								payload: { 2: !state[2] }
							});
						}}
					/>{' '}
					GDPR Purpose 2
				</li>
				<li>
					<input
						type="checkbox"
						checked={state[3]}
						onChange={() => {
							dispatch({
								type: 'CHANGE_GDPR_STATE',
								payload: { 3: !state[3] }
							});
						}}
					/>{' '}
					GDPR Purpose 3
				</li>
			</ul>
		</div>
	);
};

export default GdprModule;
