import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoList/todoListSlide';


type TasksListProps = {
	handleClick: (arg: string) => void
}

export const TasksList = (props: TasksListProps) => {
	const todoList = useSelector(selectTodoList);
	const handleClick = ({target}) => {
		props.handleClick(target.parentElement.previousSibling.innerHTML);
	}
	const handleCheck = ({target}) => {
		console.log('check');
	}

	return (
		<div>
			<h1>Todo List</h1>
			<div className='todolist'>
				<table>
					<tbody>
						{todoList.map((item, index) => {
							return (
							<tr key={item}>
								<td>{item}</td>
								<td onClick={handleCheck}><img src='../static/images/check_icon.png' width='16px'></img></td>
								<td onClick={handleClick}><img src='../static/images/delete_icon.png' width='16px'></img></td>
							</tr>);
						})}
					</tbody>
				</table>
			</div>
		</div>);
}