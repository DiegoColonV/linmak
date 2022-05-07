import { combineReducers } from 'redux';
import { editIntReducer } from './editIntReducer';
import { selectIntReducer } from './selectIntReducer';
import { txtIntReducer } from './txtIntReducer';
import { uiReducer } from './uiReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
	objTxtInt: txtIntReducer,
	getUIProgress: uiReducer,
	usrData: userReducer,
	objEditInt: editIntReducer,
	objSelectInt: selectIntReducer
});

export default reducers;
