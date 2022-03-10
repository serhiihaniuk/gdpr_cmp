import './Intro.scss';

const Intro = () => {
  return (
    <div className="intro">
      <h2 className="intro_title title title--main">Wir verwenden Cookies</h2>
      <div className="text" tabIndex={0}>
        <p className="text__paragraph">
          Wenn Sie unsere{' '}
          <a href="#" className="link">
            {' '}
            Webseiten und Applikationen
          </a>{' '}
          benutzen, werden durch Cookies und verschiedene weitere Technologien von uns und Dritten
          Daten über Sie gesammelt.
        </p>
        <p className="text__paragraph">
          Mehr dazu finden Sie unter Einstellungen. Wenn Sie auf _Akzeptieren_ klicken oder dieses
          Fenster schliessen, stimmen Sie den genannten Datenbearbeitungen durch uns und Dritte zu.
          Klicken Sie auf Einstellungen finden Sie mehr Informationen zu den Datenbearbeitungen und
          zu unseren Partnern bzw. IAB-Partnern und können dort auch jederzeit Ihre Präferenzen
          ändern.`
        </p>
        <p className="text__paragraph">
          Die meisten genannten Datenbearbeitungen werden auf der Grundlage von berechtigtem
          Interesse vorgenommen, andere wiederum dürfen nur mit Ihrer Einwilligung erfolgen. Sie
          können der Bearbeitung basierend auf berechtigtem Interesse jederzeit widersprechen sowie
          auch Ihre Einwilligung jederzeit widerrufen.
        </p>
      </div>
    </div>
  );
};

export default Intro;
