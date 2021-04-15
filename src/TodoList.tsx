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
					todoList: [...data.items],
				}));
			})
			.catch(err => console.error(err));
		
	}

	addNewTask() {
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
		fetch('http://127.0.0.1:5000/list')
			.then(res => res.json())
			.then(data => {
				this.setState({
					todoList: [...data.items],
					newTask: ''
				});
			})
			.catch(err => console.error(err));

	}

	updateNewTask(task: string) {
		this.setState((prev) => ({
			...prev,
			newTask: task
		}));
	}

	removeTask(task: string) {
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
		fetch('http://127.0.0.1:5000/list')
			.then(res => res.json())
			.then(data => {
				this.setState((prev) => ({
					...prev,
					todoList: [...data.items]
				}));
			})
			.catch(err => console.error(err));
	}

	render() {
		return (<div>
			<TasksList todoList={this.state.todoList} handleClick={this.removeTask}/>
	  		<NewTask task={this.state.newTask} handleClick={this.addNewTask} handleChange={this.updateNewTask}/>
	  	</div>);
	}
}