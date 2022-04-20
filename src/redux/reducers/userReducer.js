import { ActionTypes } from '../constants/action-types';

const initialState = {
	id: null,
	mail: null,
	pago: null,
	plan: null,
	status: null,	
	user: null,
	autenticado: false,
	token: "log_in_init"
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.USR_LOGIN:
			return {
				...state,
				id: action.payload.id,
				mail: action.payload.mail,
				pago: action.payload.pago,
				plan: action.payload.plan,
				status: action.payload.status,
				user: action.payload.user,
				autenticado: action.payload.autenticado,
				token: action.payload.token
			};
		case ActionTypes.USR_LOGOUT:
			return {
				...state,
				id: null,
				mail: null,
				pago: null,
				plan: null,
				status: null,
				user: null,
				autenticado: false,
				token: "log_in_init"
			};
		default:
			return state;
	}
};
