import { fetchTasks, saveTaskToDB, removeTaskToDB } from '../../app/api';
import { createSlice } from "@reduxjs/toolkit";


type TodoListState = string[]

type actionType = {
	type: string,
	payload: string
}

type RootState = {
	todoList: string[],
	newTask: string
}

const options = {
	name: 'todoList',
	initialState: ['fake task #1', 'fake task #2'],
	reducers: {
		loadTasks: (state, action) => {
			state = action.payload;
			
			// () => {
			// console.log('loading tasks.')
			// return async (dispatch, getState) => {
			// 	const tasks = await fetchTasks();
			// 	dispatch({ type: 'todoList/loadData', payload: tasks});
			// }}
		},
		addTask: (state, action) => {
			state.push(action.payload);
			// (task: string) => {
		// 	return async (dispatch, getState) => {
		// 		await saveTaskToDB(task);
		// 		const tasks = await fetchTasks();
		// 		dispatch({ type: 'todoList/loadData', payload: tasks});
		// 	}
		// }
	},
		removeTask: (state, action) => {
			return state.filter(task => task != action.payload);
			
			// (task:string) => {
			// return async (dispatch, getState) => {
			// 	await removeTaskToDB(task);
			// 	const tasks = await fetchTasks();
			// 	dispatch({ type: 'todoList/loadData', payload: tasks});
			// }
			// }
		}
	}
};

const todoListSlide = createSlice(options);

export const { loadTasks, addTask, removeTask} = todoListSlide.actions;

export default todoListSlide.reducer;

export const selectTodoList = (state: RootState) => {
	return state.todoList;
}