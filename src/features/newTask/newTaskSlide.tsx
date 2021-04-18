type NewTaskState = string

type actionType = {
	type: string,
	payload: string
}

export const updateNewTask = (task: string) => {
	return { type: 'newTask/updateNewTask', payload: task};
}

export const clearNewTask = () => {
	return { type: 'newTask/clearNewTask'};
}

const initialNewTask: NewTaskState = '';

export const newTaskReducer = (newTask: NewTaskState = initialNewTask, action: actionType) => {
	switch(action.type) {
		case 'newTask/updateNewTask' :
            console.log('newTaskReducer/updateNewTask');
			return action.payload;
		default:
			return newTask;
	}
}