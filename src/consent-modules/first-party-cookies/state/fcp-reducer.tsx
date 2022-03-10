interface IFcpState {
  [key: number]: boolean;
}
interface IFcpAction {
  type: string;
  payload: {
    [key: number]: boolean;
  };
}
const fcpState: IFcpState = {
  1: false,
  2: false,
  3: false,
};

export const fcpReducer = (
  state: IFcpState = fcpState,
  { type, payload }: IFcpAction
): IFcpState => {
  switch (type) {
  case 'CHANGE_FCP_STATE':
    const newFCPState = { ...state, ...payload };
    console.log(
      `%c newFPCState ${Object.entries(newFCPState)}`,
      'color: #516BEB; font-size: 14px;'
    );
    return newFCPState;
  case 'ACCEPT_ALL':
    console.log(
      `%c ACCEPTED FPC STATE WAS RECORDED TO COOKIES`,
      'color: #516BEB; font-size: 14px; background: #E4CDA7;'
    );
    return { 1: true, 2: true, 3: true };
  case 'SAVE_CHANGES':
    console.log(
      `%c CURRENT FPC STATE WAS RECORDED TO COOKIES`,
      'color: #516BEB; font-size: 14px; background: #E4CDA7;'
    );
    return state;
  default:
    return state;
  }
};
