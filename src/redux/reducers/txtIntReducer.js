import { ActionTypes } from '../constants/action-types';

const initialState = {
	txt_int: {
		categoria: null,
		ambito: null,
		estilo: null,
		color: null,
		fuente: null,
	},
};

export const txtIntReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.TXT_INT_ADD_CATEGORIA:
			return {
				...state,
				txt_int: {
					categoria: action.payload,
					ambito: state.ambito,
					estilo: state.estilo,
					color: state.color,
					fuente: state.fuente,
				},
			};
		case ActionTypes.TXT_INT_ADD_AMBITO:
			return {
				...state,
				session: {
					categoria: state.categoria,
					ambito: action.payload,
					estilo: state.estilo,
					color: state.color,
					fuente: state.fuente,
				},
			};
		case ActionTypes.TXT_INT_ADD_ESTILO:
			return {
				...state,
				session: {
					categoria: state.categoria,
					ambito: state.ambito,
					estilo: action.payload,
					color: state.color,
					fuente: state.fuente,
				},
			};
		case ActionTypes.TXT_INT_ADD_COLOR:
			return {
				...state,
				session: {
					categoria: state.categoria,
					ambito: state.ambito,
					estilo: state.estilo,
					color: action.payload,
					fuente: state.fuente,
				},
			};
		case ActionTypes.TXT_INT_ADD_FUENTE:
			return {
				...state,
				session: {
					categoria: state.categoria,
					ambito: state.ambito,
					estilo: state.estilo,
					color: state.color,
					fuente: action.payload,
				},
			};
		default:
			return state;
	}
};
