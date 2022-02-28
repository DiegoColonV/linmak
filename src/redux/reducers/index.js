import { combineReducers } from 'redux';
import { txtIntReducer } from './txtIntReducer';

const reducers = combineReducers({
	objTxtInt: txtIntReducer,
});

export default reducers;
