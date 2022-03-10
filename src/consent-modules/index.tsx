import GdprModule from './gdpr/GdprModule';
import FpcModule from './first-party-cookies/fpcModule';
import { gdprReducer } from './gdpr/state/gdpr-reducer';
import { fcpReducer } from './first-party-cookies/state/fcp-reducer';

/* Wrapping end exporting all avaliable modules. We can also check if modul is enabled in config here */
// Common interface to connect modules to popup

const modulesConfig = {
  gdpr: {
    enabled: true,
    reducer: gdprReducer,
  },
  fpc: {
    enabled: true,
    reducer: fcpReducer,
  },
};
const ModuleWrapper = ({ ConsentModule, moduleName, isEnabled }: any) => {
  if (!isEnabled) {
    return null;
  }
  return (
    <div>
      <h2>{moduleName}</h2>
      <ConsentModule />
    </div>
  );
};

export default [
  <ModuleWrapper
    key={1}
    ConsentModule={FpcModule}
    moduleName={'First Party Cookies'}
    isEnabled={modulesConfig.fpc.enabled}
  />,
  <ModuleWrapper
    key={2}
    ConsentModule={GdprModule}
    moduleName={'GDPR'}
    isEnabled={modulesConfig.gdpr.enabled}
  />,
];

function createReducers(config: typeof modulesConfig) {
  const reducers: any = {};
  Object.entries(config).forEach(([moduleName, options]) => {
    if (options.enabled) {
      reducers[moduleName] = options.reducer;
    }
  });
  return reducers;
}

export const reducers = createReducers(modulesConfig);
