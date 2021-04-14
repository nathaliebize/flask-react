import React from 'react';
import TodoList from './TodoList';

type TasksListProps = {
    todoList: string[]
	handleClick: (arg: string) => void
}

export default class TasksList extends React.Component<TasksListProps, {}> {
	constructor(props: TasksListProps) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick({target}) {
		this.props.handleClick(target.innerHTML);
	}

	render() {
		return (
			<div>
				<h1>List</h1>
				<div>
					{this.props.todoList.map((item, index) => {
						return <li key={index} onClick={this.handleClick}>{item}</li>;
					})}
				</div>
			</div>);
	}
}