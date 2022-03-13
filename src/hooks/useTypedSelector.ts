import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppState} from '../state';

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
