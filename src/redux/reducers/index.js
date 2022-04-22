import { combineReducers } from 'redux';
import { editIntReducer } from './editIntReducer';
import { txtIntReducer } from './txtIntReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
	objTxtInt: txtIntReducer,
	getUIProgress: uiReducer,
	usrData: userReducer,
	objEditInt: editIntReducer,
});

export default reducers;
