import { createSlice } from '@reduxjs/toolkit';

type NewTaskState = string

type actionType = {
	type: string,
	payload: string
}

type RootState = {
	todoList: string[],
	newTask: string
}

const options = {
    name: 'newTask',
    initialState: '',
    reducers: {
        updateNewTask: (state: NewTaskState, action: actionType) => {
            return action.payload;
        },
        clearNewTask: (state: NewTaskState, action: actionType) => {
            return '';
        }
    }
}

const newTaskSlide = createSlice(options);

export const {updateNewTask, clearNewTask} = newTaskSlide.actions;

export default newTaskSlide.reducer;

export const selectNewTask = (state: RootState) => {
    return state.newTask;
}