import { ActionTypes } from '../constants/action-types';

const initialState = {
	options: {
		colors: [],
		ints: [],
		fonts: []
	},
	selected: {
		color: 1,
		int: 1,
		font: 1,
	},
};

export const selectIntReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.INT_SET_COLORS:
			return {
				...state,
				options: {
					...state.options,
					colors: action.payload
				},
			};
		case ActionTypes.INT_SET_FONTS:
			return {
				...state,
				options: {
					...state.options,
					fonts: action.payload
				},
			};
		case ActionTypes.INT_SET_INTS:
			return {
				...state,
				options: {
					...state.options,
					ints: action.payload
				},
			};
		case ActionTypes.INT_SELECT_COLOR:
			return {
				...state,
				selected: {
					...state.selected,
					color: action.payload,
				},
			};
		case ActionTypes.INT_SELECT_INT:
			return {
				...state,
				selected: {
					...state.selected,
					int: action.payload,
				},
			};
		case ActionTypes.INT_SELECT_FONT:
			return {
				...state,
				selected: {
					...state.selected,
					font: action.payload,
				},
			};
		default:
			return state;
	}
};
