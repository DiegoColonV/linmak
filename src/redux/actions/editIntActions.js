import { ActionTypes } from '../constants/action-types';

export const addEditCat = (data) => {
	return {
		type: ActionTypes.EDIT_INT_CAT,
		payload: data,
	};
};

export const addEditAmbit = (data) => {
	return {
		type: ActionTypes.EDIT_INT_AMBIT,
		payload: data,
	};
};

export const addEditStyle = (data) => {
	return {
		type: ActionTypes.EDIT_INT_STYLE,
		payload: data,
	};
};

export const addEditColor = (data) => {
	return {
		type: ActionTypes.EDIT_INT_COLOR,
		payload: data,
	};
};

export const addEditFont = (data) => {
	return {
		type: ActionTypes.EDIT_INT_FONT,
		payload: data,
	};
};

export const addEditBtns = (data) => {
	return {
		type: ActionTypes.EDIT_INT_BTNS,
		payload: data,
	};
};

export const addEditNav = (data) => {
	return {
		type: ActionTypes.EDIT_INT_NAV,
		payload: data,
	};
};

export const addEditFoot = (data) => {
	return {
		type: ActionTypes.EDIT_INT_FOOT,
		payload: data,
	};
};

export const addEditTF = (data) => {
	return {
		type: ActionTypes.EDIT_INT_TF,
		payload: data,
	};
};

export const deleteItemCat = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_CAT,
		payload: id,
	};
};

export const deleteItemAmbit = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_AMBIT,
		payload: id,
	};
};

export const deleteItemStyle = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_STYLE,
		payload: id,
	};
};

export const deleteItemColor = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_COLOR,
		payload: id,
	};
};

export const deleteItemFont = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_FONT,
		payload: id,
	};
};

export const deleteItemBtns = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_BTNS,
		payload: id,
	};
};

export const deleteItemNav = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_NAV,
		payload: id,
	};
};

export const deleteItemFoot = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_FOOT,
		payload: id,
	};
};

export const deleteItemTF = (id) => {
	return {
		type: ActionTypes.EDIT_DELETE_ITEM_TF,
		payload: id,
	};
};

export const addLink = (link) =>{
	return {
		type: ActionTypes.EDIT_ADD_LINK,
		payload: link
	}
} 