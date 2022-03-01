import { combineReducers } from 'redux';
import { txtIntReducer } from './txtIntReducer';
import { uiReducer } from './uiReducer';

const reducers = combineReducers({
	objTxtInt: txtIntReducer,
	getUIProgress: uiReducer,
});

export default reducers;
