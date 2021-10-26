import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import Task from './types/Task'
import NewTaskInfo from './types/NewTaskInfo'
import Filters from './types/Filters'
import {TaskStatus} from './types/TaskStatus'
import {Dispatch, GetState} from './types/DispatchAndGetState'

let list:Task[] =[]
const slice = createSlice({
	name         : 'tasks',
	initialState : {
		list,
		loading   : false,
		lastFetch : null,
	},
	reducers     : {
		tasksRequested     : (tasks, action) => {
			tasks.loading = true;
		},

		tasksReceived      : (tasks, action) => {
			tasks.list = action.payload;
			tasks.loading = false;
		},

		tasksRequestFailed : (tasks, action) => {
			tasks.loading = false;
		},

		taskAdded          : (tasks, action) => {
			tasks.list.push(action.payload);
		},

		taskStatusChanged  : (tasks, action) => {
			const index = tasks.list.findIndex(
				(task:Task) => task.id === action.payload.id,
			);
			tasks.list[index] = action.payload;
		},

		taskDeleted        : (tasks, action) => {
			tasks.list = tasks.list.filter(
				(task) => task.id !== action.payload,
			);
		},
	},
});

const {
	taskAdded,
	tasksReceived,
	tasksRequested,
	tasksRequestFailed,
	taskStatusChanged,
	taskDeleted,
} = slice.actions;

export default slice.reducer;

// Action Creators
const url = '/tasks';

export const loadTasks = (filters?:Filters) => (dispatch:Dispatch, getState:GetState) => {
	const { accessToken } = getState().user.data;
	return dispatch(
		apiCallBegan({
			url,
			accessToken,
			params        : filters,
			method:'get',
			onStart     : tasksRequested.type,
			onSuccess   : tasksReceived.type,
			onError     : tasksRequestFailed.type,
		}),
	);
};

export const addTask = (task:NewTaskInfo) => (dispatch:Dispatch, getState:GetState) => {
	const { accessToken } = getState().user.data;
	return dispatch(
		apiCallBegan({
			url,
			accessToken,
			method      : 'post',
			data        : task,
			onSuccess   : taskAdded.type,
		}),
	);
};

export const changeTaskStatus = (id:string, status:TaskStatus) => (
	dispatch:Dispatch,
	getState:GetState,
) => {
	const { accessToken } = getState().user.data;
	return dispatch(
		apiCallBegan({
			url         : `${url}/${id}/status`,
			method      : 'patch',
			accessToken,
			data        : { status },
			onSuccess   : taskStatusChanged.type,
		}),
	);
};

export const deleteTask = (id:string) => (
	dispatch:Dispatch,
	getState:GetState,
) => {
	const { accessToken } = getState().user.data;
	return dispatch(apiCallBegan({
		url       : `${url}/${id}`,
		method    : 'delete',
		accessToken,
		data      : { id },
		onSuccess : taskDeleted.type,
	})
	)
}
