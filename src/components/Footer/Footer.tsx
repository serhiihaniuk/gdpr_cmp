import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { redirectAction, Routes } from '../../state/service';
import './Footer.scss';

const Footer = () => {
	const route = useTypedSelector((state) => state.appState.route);
	const dispatch = useDispatch();
	return (
		<footer className="footer">
			{route === Routes.Intro && (
				<>
					<button
						className="button button--secondary"
						onClick={() => {
							dispatch(redirectAction(Routes.Details));
						}}
					>
						Einstellungen
					</button>
					<button
						className="button button--primary"
						onClick={() => {
							dispatch({ type: 'ACCEPT_ALL' });
						}}
					>
						Akzeptieren und schliessen
					</button>
				</>
			)}
			{route === Routes.Details && (
				<>
					<button
						className="button button--secondary"
						onClick={() => {
							dispatch(redirectAction(Routes.Intro));
						}}
					>
						Zurück
					</button>
					<button
						className="button button--primary"
						onClick={() => {
							dispatch({ type: 'SAVE_CHANGES' });
						}}
					>
						Save
					</button>
				</>
			)}
		</footer>
	);
};

export default Footer;
