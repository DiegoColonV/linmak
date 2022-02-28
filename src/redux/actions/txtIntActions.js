import { ActionTypes } from '../constants/action-types';

export const addAmbito = (txt) => {
	return {
		type: ActionTypes.TXT_INT_ADD_AMBITO,
		payload: txt,
	};
};

export const addCategoria = (txt) => {
	return {
		type: ActionTypes.TXT_INT_ADD_CATEGORIA,
		payload: txt,
	};
};

export const addEstilo = (txt) => {
	return {
		type: ActionTypes.TXT_INT_ADD_ESTILO,
		payload: txt,
	};
};

export const addColor = (txt) => {
	return {
		type: ActionTypes.TXT_INT_ADD_COLOR,
		payload: txt,
	};
};

export const addFuente = (txt) => {
	return {
		type: ActionTypes.TXT_INT_ADD_FUENTE,
		payload: txt,
	};
};
