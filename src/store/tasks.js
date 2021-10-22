import { createSlice } from '@reduxjs/toolkit';
// import { createSelector } from "reselect";
import { apiCallBegan } from './api';
// import moment from "moment";

const slice = createSlice({
	name         : 'tasks',
	initialState : {
		list      : [],
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
			tasks.lastFetch = Date.now();
		},

		tasksRequestFailed : (tasks, action) => {
			tasks.loading = false;
		},

		taskAdded          : (tasks, action) => {
			tasks.list.push(action.payload);
		},

		taskStatusChanged  : (tasks, action) => {
			const index = tasks.list.findIndex(
				(task) => task.id === action.payload.id,
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

export const loadTasks = (filters) => (dispatch, getState) => {
	const { accessToken } = getState().user.data;
	// const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
	// if (diffInMinutes < 10) return;
	return dispatch(
		apiCallBegan({
			url,
			accessToken,
			data        : filters,
			onStart     : tasksRequested.type,
			onSuccess   : tasksReceived.type,
			onError     : tasksRequestFailed.type,
		}),
	);
};

export const addTask = (task) => (dispatch, getState) => {
	const { accessToken } = getState().user.data;
	console.log('tyfuyfuyuyuy');
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

export const changeTaskStatus = (id, status) =>
	apiCallBegan({
		url       : url + '/' + id,
		method    : 'patch',
		data      : { status },
		onSuccess : taskStatusChanged.type,
	});

export const deleteTask = (id) =>
	apiCallBegan({
		url       : url + '/' + id,
		method    : 'delete',
		data      : { id },
		onSuccess : taskDeleted.type,
	});

// // Selector

// // Memoization
// // tasks => get unresolved tasks from the cache

// export const getUnresolvedtasks = createSelector(
//   state => state.entities.tasks,
//   state => state.entities.projects,
//   (tasks, projects) => tasks.list.filter(bug => !bug.resolved)
// );
