export enum Routes {
  Intro = 'intro',
  Details = 'details',
}
export enum Actions {
  Redirect = 'REDIRECT',
}

export const redirectAction = (route: Routes) => {
  return {
    type: Actions.Redirect,
    payload: route,
  };
};
