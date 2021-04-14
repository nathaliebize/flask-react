import React from 'react';
import TasksList from './TasksList';
import NewTask from './NewTask';

type TodoListState = {
    todoList: string[],
	newTask: string
}

export default class TodoList extends React.Component<{}, TodoListState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			todoList: ['vaccum', 'make the bed', 'dishes'],
			newTask: ''
		}
        this.addNewTask = this.addNewTask.bind(this);
        this.updateNewTask = this.updateNewTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
	}

	addNewTask() {
		if (this.state.newTask != '') {
			this.setState((prev) => ({
				todoList: [...prev.todoList, prev.newTask],
				newTask: ''
			}));
		}
	}

	updateNewTask(task: string) {
		this.setState((prev) => ({
			...prev,
			newTask: task
		}));
	}

	removeTask(task: string) {
		const newTaskList = this.state.todoList.filter((currentTask) => (currentTask != task));
		this.setState((prev) => ({
			...prev,
			todoList: newTaskList
		}));
	}

	render() {
		return (<div>
			<TasksList todoList={this.state.todoList} handleClick={this.removeTask}/>
	  		<NewTask task={this.state.newTask} handleClick={this.addNewTask} handleChange={this.updateNewTask}/>
	  	</div>);
	}
}