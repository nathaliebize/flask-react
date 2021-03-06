import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TasksList } from './TasksList';
import { NewTask } from './NewTask';
import { fetchData, saveTask, removeTask, selectTodoList, toggleTask } from './features/todoList/todoListSlide'
import { updateNewTask, clearNewTask, selectNewTask} from './features/newTask/newTaskSlide'


export default function TodoList (props) {
	const todoList = useSelector(selectTodoList);
	const newTask = useSelector(selectNewTask);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, []);


	function clickAddButton(task: string) {
		dispatch(clearNewTask(''));
		dispatch(saveTask(task))
	}

	function updateNewTaskField(task: string) {
		dispatch(updateNewTask(task))
	}

	function clickTask(task: string) {
		dispatch(removeTask(task))
	}

	function toggle(id: number) {
		dispatch(toggleTask(id))
	}

	return (
		<div>
			<TasksList handleClick={clickTask} handleToggle={toggle}/>
	  		<NewTask handleClick={clickAddButton} handleChange={updateNewTaskField}/>
	  	</div>);
}