interface IGdprState {
	[key: number]: boolean;
}
interface IGdprAction {
	type: string;
	payload: {
		[key: number]: boolean;
	};
}
const fcpState: IGdprState = {
	1: false,
	2: false,
	3: false
};

export const gdprReducer = (
	state: IGdprState = fcpState,
	{ type, payload }: IGdprAction
): IGdprState => {
	switch (type) {
		case 'CHANGE_GDPR_STATE':
			const newState = { ...state, ...payload };
			console.log(
				`%c newGDPRState ${Object.entries(newState)}`,
				'color: #219F94; font-size: 14px;'
			);
			return newState;
		case 'ACCEPT_ALL':
			console.log(
				`%c ACCEPTED GDPR STATE WAS RECORDED TO COOKIES`,
				'color: #219F94; font-size: 14px; background: #F7ECDE;'
			);
			return { 1: true, 2: true, 3: true };
		case 'SAVE_CHANGES':
			console.log(
				`%c CURRENT GDPR STATE WAS RECORDED TO COOKIES`,
				'color: #219F94; font-size: 14px; background: #F7ECDE;'
			);
			return state;
		default:
			return state;
	}
};
