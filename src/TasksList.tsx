import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoList/todoListSlide';


type TasksListProps = {
	handleClick: (arg: string) => void
}

export const TasksList = (props: TasksListProps) => {
	const todoList = useSelector(selectTodoList);
	const handleClick = ({target}) => {
		props.handleClick(target.innerHTML);
	}

	return (
		<div>
			<h1>List</h1>
			<div>
				{todoList.map((item, index) => {
					return <li key={index} onClick={handleClick}>{item}</li>;
				})}
			</div>
		</div>);
}