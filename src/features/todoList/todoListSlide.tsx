type TodoListState = string[]

type actionType = {
	type: string,
	payload: string
}

export const loadTasks = (taskList: string[]) => {
	return { type: 'todoList/loadData', payload: taskList };
}

export const addTask = (task: string) => {
	return { type: 'todoList/addTask', payload: task};
}

export const removeTask = (task:string) => {
	return { type: 'todoList/removeTask', payload: task};
}

const initialTodoList: TodoListState = [];

export const todoListReducer = (todoList: TodoListState = initialTodoList, action: actionType) => {
	
	switch(action.type) {
		case 'todoList/loadData' :
			return [...action.payload];
		case 'todoList/addTask' :
			return [...action.payload];
		default: 
			return todoList;
	}
}