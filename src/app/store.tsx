import { configureStore } from '@reduxjs/toolkit';

import todoListReducer from '../features/todoList/todoListSlide'
import newTaskReducer from '../features/newTask/newTaskSlide'

export default configureStore({
    reducer: {
        todoList: todoListReducer,
        newTask: newTaskReducer
    }
});