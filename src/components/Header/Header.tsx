import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header__logo">
				<div className="logo"></div>
			</div>
			<div className="header__language">DE</div>
			<div className="header__close">
				<button className="button button--close">Akzeptieren und Schliessen</button>
			</div>
		</header>
	);
};

export default Header;
