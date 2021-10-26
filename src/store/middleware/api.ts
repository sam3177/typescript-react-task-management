import axios, { AxiosResponse } from 'axios';
import * as actions from '../api';
import Task from '../types/Task';
import { Dispatch } from '../types/DispatchAndGetState';
import { Middleware } from 'redux';
export const baseURL = 'http://localhost:3000';

const api: Middleware<any, any, any> = (store: any) => (
	next: any,
) => async (action: any) => {
	const dispatch: Dispatch = store.dispatch;
	if (action.type !== actions.apiCallBegan.type) return next(action);

	const {
		url,
		method,
		data,
		onStart,
		onSuccess,
		params,
		onError,
		accessToken,
	} = action.payload;

	if (onStart) dispatch({ type: onStart });

	next(action);
	try {
		const response = await axios.request<
			AxiosResponse<{ data: Task | Task[] }>
		>({
			headers: {
				Authorization: 'Bearer ' + accessToken,
			},
			baseURL,
			url,
			params,
			method,
			data,
		});
		// General
		dispatch(actions.apiCallSuccess(response.data));
		// Specific
		if (onSuccess)
			dispatch({ type: onSuccess, payload: response.data });
	} catch (error:any) {
		// General
		dispatch(actions.apiCallFailed(error.message));
		// Specific
		if (onError) dispatch({ type: onError, payload: error.message });
	}
};

export default api;
