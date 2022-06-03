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

export const setIdWork = (val) =>{
	return {
		type: ActionTypes.UI_ID_WORK,
		payload: val,
	};
}

export const setIdFolder = (val) =>{
	return {
		type: ActionTypes.UI_ID_FOLDER,
		payload: val,
	};
}

export const setLoginTab = (val) =>{
	return {
		type: ActionTypes.UI_LOGIN_TAB,
		payload: val,
	};
}
