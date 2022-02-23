import { combineReducers, createStore } from 'redux';
import { reducers as consentModules } from '../consent-modules';
import { appStateReducer } from './store';


export const rootReducer = combineReducers({
	appState: appStateReducer,
    ...consentModules
});

export const store = createStore(rootReducer);
export type AppState = ReturnType<typeof rootReducer>;
