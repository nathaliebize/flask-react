import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectNewTask } from './features/newTask/newTaskSlide';
import { selectTodoList } from './features/todoList/todoListSlide';

type NewTaskProps = {
	handleClick: (arg: string) => void,
	handleChange: (arg: string) => void,
}

export const NewTask = (props: NewTaskProps) => {
	const tasks = useSelector(selectTodoList);
	const newTask = useSelector(selectNewTask)

	const handleClick = () => {
		props.handleClick(newTask);
	}

	const handleChange = ({target}) => {
		props.handleChange(target.value);
	}

	const handleKeyPress = ({key}) => {
		if (key === 'Enter') {
			handleClick()
		}
	}

	return (<div>
		<input onChange={handleChange} value={newTask} onKeyPress={handleKeyPress}></input>
		<button onClick={handleClick}>Add</button>
	</div>);
}
