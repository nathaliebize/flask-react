class NewTask extends React.Component<any, any> {
	render() {
		return <h1>New Task</h1>;
	}
}

class TodoList extends React.Component<any, any> {
	constructor(props) {
		super(props);
		
	}
	render() {
		const items = this.props.todoList.map((item, index) => {
				return <li key={index}>{item}</li>
			})
		return (
			<div>
				<h1>List</h1>
				<div>
					{items}
				</div>
			</div>);
	}
}

type todoAppState = {
	todoList: string[],
	newTask: string
}

type todoAppProps = {
	todoList: string[]
}

class TodoApp extends React.Component<todoAppProps, todoAppState> {
	constructor(props: todoAppProps) {
		super(props);
		this.state = {
			todoList: this.props.todoList,
			newTask: ''
		}
	}

	render() {
		return (<div>
			<TodoList todoList={this.state.todoList} />
	  		<NewTask />
	  	</div>);
	}
}

const todoListDB = ['Vaccum', 'Moop', 'Dishes'];

ReactDOM.render(
	<TodoApp todoList={todoListDB} />,
  document.getElementById('main')
);
