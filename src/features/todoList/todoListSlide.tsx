import { fetchTasks, saveTaskToDB, removeTaskToDB, updateTaskDB } from '../../app/api';
import { createAsyncThunk, createSlice, Dictionary } from '@reduxjs/toolkit';


type TodoListState = {item: string, achieved: number}[]

type actionType = {
	type: string,
	payload: string
}

type RootState = {
	todoList:  {id: number, item: string, achieved: number}[],
	newTask: string
}

const getResults = async () => {
	const response = await fetchTasks();
	const json = await response.json();
	let results: {id: number, item: string, achieved: number}[] = [];
	json.items.forEach(element => {
		results.push({
			id: element.id,
			item: element.item, 
			achieved: element.achieved
		});
	});
	return results;
}

export const fetchData = createAsyncThunk(
	'todoList/loadTasks',
	async (arg, thunkAPI) => {		
		return await getResults();
	}
)

export const saveTask = createAsyncThunk(
	'todoList/addTask',
	async (task: string, thunkAPI) => {
		if (task.trim() != '') {
			await saveTaskToDB(task);
		}
		return await getResults();
	}
)

export const removeTask = createAsyncThunk(
	'todoList/removeTask',
	async (task: string, thunkAPI) => {
		await removeTaskToDB(task);
		return await getResults();
	}
)

export const toggleTask = createAsyncThunk(
	'todoList/toggleTask',
	async (id: number, { getState }: any) => {
		const todoList = selectTodoList(getState());
		const taskToToggle = todoList.filter(e => e.id.toString() === id.toString())[0]
		await updateTaskDB(id, !taskToToggle.achieved);
		return await getResults();
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
		});
		builder.addCase(toggleTask.fulfilled, (state: TodoListState, action: actionType) => {
			return action.payload;
		});
	}
};

const todoListSlide = createSlice(options);

export default todoListSlide.reducer;

export const selectTodoList = (state: RootState) => {
	return state.todoList;
}