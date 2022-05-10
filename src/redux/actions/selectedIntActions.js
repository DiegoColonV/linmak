import { ActionTypes } from '../constants/action-types';

export const addOptionsColor = (arr) => {
	return {
		type: ActionTypes.INT_SET_COLORS,
		payload: arr,
	};
};

export const addOptionsInt = (arr) => {
	return {
		type: ActionTypes.INT_SET_INTS,
		payload: arr,
	};
};

export const addOptionsFont = (arr) => {
	return {
		type: ActionTypes.INT_SET_FONTS,
		payload: arr,
	};
};

export const selectColor = (arr) => {
	return {
		type: ActionTypes.INT_SELECT_COLOR,
		payload: arr,
	};
};

export const selectInt = (arr) => {
	return {
		type: ActionTypes.INT_SELECT_INT,
		payload: arr,
	};
};

export const selectFont = (arr) => {
	return {
		type: ActionTypes.INT_SELECT_FONT,
		payload: arr,
	};
};
