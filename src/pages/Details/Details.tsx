import consentModules from '../../consent-modules';
import {useEffect, useRef} from 'preact/compat';

const Details = () => {
  const detailsWrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (detailsWrapper.current) {
      detailsWrapper.current.focus();
    }
  }, [detailsWrapper.current]);
  return (
    <div>
      <div ref={detailsWrapper} className="text" tabIndex={0}>
        <h2>Consent settings</h2>
        {/* Renders all used modules */}
        {consentModules}
      </div>
    </div>
  );
};

export default Details;
