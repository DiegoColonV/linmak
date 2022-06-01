import { ActionTypes } from '../constants/action-types';

const initialState = {
	progress: 0,
	edit_saved: false,
	id_work: null,
	id_folder: null
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
		case ActionTypes.UI_ID_WORK:
			return {
				...state,
				id_work: action.payload,
			};
		case ActionTypes.UI_ID_FOLDER:
			return {
				...state,
				id_folder: action.payload,
			};
		default:
			return state;
	}
};
