import { fetchTasks, saveTaskToDB, removeTaskToDB } from '../../app/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


type TodoListState = string[]

type actionType = {
	type: string,
	payload: string
}

type RootState = {
	todoList: string[],
	newTask: string
}

export const fetchData = createAsyncThunk(
	'todoList/loadTasks',
	async (arg, thunkAPI) => {
		const tasks = await fetchTasks();
		const result = await tasks.json();
		return result.items;
	}
)

export const saveTask = createAsyncThunk(
	'todoList/addTask',
	async (task: string, thunkAPI) => {
		if (task != '') {
			await saveTaskToDB(task);
		}
		const tasks = await fetchTasks();
		const result = await tasks.json();
		return result.items;
	}
)

export const removeTask = createAsyncThunk(
	'todoList/removeTask',
	async (task: string, thunkAPI) => {
		await removeTaskToDB(task);
		const tasks = await fetchTasks();
		const result = await tasks.json();
		return result.items;
	}
)

const options = {
	name: 'todoList',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchData.fulfilled, (state: TodoListState, action: actionType) => {
			return action.payload;
		});
		builder.addCase(saveTask.fulfilled, (state: TodoListState, action: actionType) => {
			return action.payload;
		});	
		builder.addCase(removeTask.fulfilled, (state: TodoListState, action: actionType) => {
			return action.payload;
		})
	}
};

const todoListSlide = createSlice(options);

export default todoListSlide.reducer;

export const selectTodoList = (state: RootState) => {
	return state.todoList;
}