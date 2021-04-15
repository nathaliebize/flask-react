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
			todoList: [],
			newTask: ''
		}
        this.addNewTask = this.addNewTask.bind(this);
        this.updateNewTask = this.updateNewTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
	}

	componentDidMount() {
		fetch('http://127.0.0.1:5000/list')
			.then(res => res.json())
			.then(data => {
				this.setState((prev) => ({
					...prev,
					todoList: [...prev.todoList, ...data.items],
				}));
			})
			.catch(err => console.error(err));
		
	}

	addNewTask() {
		if (this.state.newTask != '') {
			this.setState((prev) => ({
				todoList: [...prev.todoList, prev.newTask],
				newTask: ''
			}));
		}
		fetch('http://127.0.0.1:5000/saveItem', {
			headers: {
				'Content-Type': 'application/json',
			}, 
			method: 'POST',
			body: JSON.stringify({'name': this.state.newTask})
		})
		.then(response => response.json())
		.catch((error) => {
			console.error('Error:', error);
		});

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
		fetch('http://127.0.0.1:5000/removeItem', {
			headers: {
				'Content-Type': 'application/json',
			}, 
			method: 'POST',
			body: JSON.stringify({'name': task})
		})
		.then(response => response.json())
		.catch((error) => {
			console.error('Error:', error);
		});
	}

	render() {
		return (<div>
			<TasksList todoList={this.state.todoList} handleClick={this.removeTask}/>
	  		<NewTask task={this.state.newTask} handleClick={this.addNewTask} handleChange={this.updateNewTask}/>
	  	</div>);
	}
}