import { ActionTypes } from '../constants/action-types';

const initialState = {
	category: [],
	ambit: [],
	style: [],
	color: [],
	font: [],
	buttons: [],
	navbar: [],
	footer: [],
	textfield: [],
};

export const editIntReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.EDIT_INT_CAT:
			return {
				...state,
				category: [...state.category, action.payload],
			};
		case ActionTypes.EDIT_INT_AMBIT:
			return {
				...state,
				ambit: [...state.ambit, action.payload],
			};
		case ActionTypes.EDIT_INT_STYLE:
			return {
				...state,
				style: [...state.style, action.payload],
			};
		case ActionTypes.EDIT_INT_COLOR:
			return {
				...state,
				color: [...state.color, action.payload],
			};
		case ActionTypes.EDIT_INT_FONT:
			return {
				...state,
				font: [...state.font, action.payload],
			};
		case ActionTypes.EDIT_INT_BTNS:
			return {
				...state,
				buttons: [...state.buttons, action.payload],
			};
		case ActionTypes.EDIT_INT_NAV:
			return {
				...state,
				navbar: [...state.navbar, action.payload],
			};
		case ActionTypes.EDIT_INT_FOOT:
			return {
				...state,
				footer: [...state.footer, action.payload],
			};
		case ActionTypes.EDIT_INT_TF:
			return {
				...state,
				textfield: [...state.textfield, action.payload],
			};
		case ActionTypes.EDIT_DELETE_ITEM_CAT:
			return {
				...state,
				category: state.category.filter((item, index) => item.id_change !== action.payload),
			};
		case ActionTypes.EDIT_DELETE_ITEM_AMBIT:
			return {
				...state,
				ambit: state.ambit.filter((item, index) => item.id_change !== action.payload),
			};
		case ActionTypes.EDIT_DELETE_ITEM_STYLE:
			return {
				...state,
				style: state.style.filter((item, index) => item.id_change !== action.payload),
			};
		case ActionTypes.EDIT_DELETE_ITEM_COLOR:
			return {
				...state,
				color: state.color.filter((item, index) => item.id_change !== action.payload),
			};
		case ActionTypes.EDIT_DELETE_ITEM_FONT:
			return {
				...state,
				font: state.font.filter((item, index) => item.id_change !== action.payload),
			};
		case ActionTypes.EDIT_DELETE_ITEM_BTNS:
			return {
				...state,
				buttons: state.buttons.filter((item, index) => item.id_change !== action.payload),
			};
		case ActionTypes.EDIT_DELETE_ITEM_NAV:
			return {
				...state,
				navbar: state.navbar.filter((item, index) => item.id_change !== action.payload),
			};
		case ActionTypes.EDIT_DELETE_ITEM_FOOT:
			return {
				...state,
				footer: state.footer.filter((item, index) => item.id_change !== action.payload),
			};
		case ActionTypes.EDIT_DELETE_ITEM_TF:
			return {
				...state,
				textfield: state.textfield.filter((item, index) => item.id_change !== action.payload),
			};
		default:
			return state;
	}
};
