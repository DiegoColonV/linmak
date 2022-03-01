import { ActionTypes } from '../constants/action-types';

export const setUIProgress = (progress) => {
	return {
		type: ActionTypes.UI_PROGRESS,
		payload: progress,
	};
};
