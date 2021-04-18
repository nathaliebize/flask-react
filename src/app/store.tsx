import { createStore, combineReducers } from 'redux';

import { todoListReducer } from '../features/todoList/todoListSlide'
import { newTaskReducer } from '../features/newTask/newTaskSlide'

const reducers = {
    todoList: todoListReducer,
    newTask: newTaskReducer
}

export const store = createStore(combineReducers(reducers));