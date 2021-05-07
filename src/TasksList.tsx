import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoList/todoListSlide';

type TasksListProps = {
	handleClick: (arg: string) => void
	handleToggle: (id: number) => void
}

export const TasksList = (props: TasksListProps) => {
	const todoList = useSelector(selectTodoList);
	const handleClick = ({target}) => {
		props.handleClick(target.parentElement.parentElement.children[1].children[0].innerHTML);
	}
	const handleCheck = ({target}) => {
		props.handleToggle(target.parentElement.parentElement.id)
	}

	return (
		<div>
			<div className='title'>
				<h1>Todo List</h1>
			</div>
			<div className='todolist'>
				<table>
					<tbody>
						{todoList.map((item, index) => {
							return (
							<tr key={item.id} id={item.id.toString()}>
								<td><input onChange={handleCheck} type="checkbox" checked={item.achieved === 1 ? true : false}></input></td>
								<td><div className={(item.achieved === 1 ? 'completed' : '') + ' item'}>{item.item}</div></td>
								<td className='delete' onClick={handleClick}><img src='../static/images/delete_icon.png' width='16px'></img></td>
							</tr>);
						})}
					</tbody>
				</table>
			</div>
		</div>);
}