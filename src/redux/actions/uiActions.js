import { ActionTypes } from '../constants/action-types';

export const setUIProgress = (progress) => {
	return {
		type: ActionTypes.UI_PROGRESS,
		payload: progress,
	};
};

export const setEditSaved = (val) =>{
	return {
		type: ActionTypes.UI_EDIT_SAVED,
		payload: val,
	};
}
