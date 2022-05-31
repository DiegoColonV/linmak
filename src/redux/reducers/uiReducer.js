import { ActionTypes } from '../constants/action-types';

const initialState = {
	progress: 0,
	edit_saved: false
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.UI_PROGRESS:
			return {
				...state,
				progress: action.payload,
			};
		case ActionTypes.UI_EDIT_SAVED:
			return {
				...state,
				edit_saved: action.payload,
			};
		default:
			return state;
	}
};
