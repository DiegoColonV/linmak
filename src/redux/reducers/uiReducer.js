import { ActionTypes } from '../constants/action-types';

const initialState = {
	progress: 0,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.UI_PROGRESS:
			return {
				progress: action.payload,
			};
		default:
			return state;
	}
};
