import consentModules from '../../consent-modules';

const Details = () => {
  return (
    <div>
      <div className="text" tabIndex={0}>
        <h2>Consent settings</h2>
        {/* Renders all used modules */}
        {consentModules}
      </div>
    </div>
  );
};

export default Details;
