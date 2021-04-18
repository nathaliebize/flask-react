import React from 'react';
import TasksList from './TasksList';
import NewTask from './NewTask';
import { loadTasks, addTask, removeTask } from './features/todoList/todoListSlide'
import { updateNewTask, clearNewTask } from './features/newTask/newTaskSlide'

const URL_LIST = 'http://127.0.0.1:5000/list';
const URL_SAVE_ITEM = 'http://127.0.0.1:5000/saveItem';
const URL_REMOVE_ITEM = 'http://127.0.0.1:5000/removeItem';

type RootState = {
	todoList: string[],
	newTask: string
}

type actionType = {
	type: string,
	payload: string
}

export default class TodoList extends React.Component<any, RootState> {
	constructor(props: {}) {
		super(props);
        this.addNewTask = this.addNewTask.bind(this);
        this.updateNewTask = this.updateNewTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.loadTask = this.loadTask.bind(this);
		
	}

	loadTask() {
		fetch(URL_LIST)
		.then(res => res.json())
		.then(data => {
			this.props.dispatch(loadTasks([...data.items]));
		})
		.catch(err => console.error(err));
	}

	componentDidMount() {
		this.loadTask();
	}

	addNewTask() {
		fetch(URL_SAVE_ITEM, {
			headers: {
				'Content-Type': 'application/json',
			}, 
			method: 'POST',
			body: JSON.stringify({'name': this.props.state.newTask})
		})
		.then(response => response.json())
		.catch((error) => {
			console.error('Error:', error);
		});
		this.props.dispatch(clearNewTask());
		this.loadTask();
	}

	updateNewTask(task: string) {
		this.props.dispatch(updateNewTask(task))
	}

	removeTask(task: string) {
		fetch(URL_REMOVE_ITEM, {
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
		this.loadTask();
	}

	render() {
		return (<div>
			<TasksList todoList={this.props.state.todoList} handleClick={this.removeTask}/>
	  		<NewTask task={this.props.state.newTask} handleClick={this.addNewTask} handleChange={this.updateNewTask}/>
	  	</div>);
	}
}