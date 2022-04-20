import { combineReducers } from 'redux';
import { txtIntReducer } from './txtIntReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
	objTxtInt: txtIntReducer,
	getUIProgress: uiReducer,
	usrData: userReducer
});

export default reducers;
