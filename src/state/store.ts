import {Actions, Routes} from './service';
/* ## Main apps store */

interface IAppState {
  route: Routes;
}
interface IReduxAction {
  type: Actions;
  payload: Routes;
}
const appState: IAppState = {
  route: Routes.Intro,
};

export const appStateReducer = (
  state: IAppState = appState,
  {type, payload}: IReduxAction
): IAppState => {
  switch (type) {
  case Actions.Redirect:
    return {route: payload};
  default:
    return state;
  }
};
