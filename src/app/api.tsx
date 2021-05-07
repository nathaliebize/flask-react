
const URL_TASK = 'http://127.0.0.1:5000/task';
const URL_SAVE_ITEM = 'http://127.0.0.1:5000/saveItem';
const URL_REMOVE_ITEM = 'http://127.0.0.1:5000/removeItem';
const URL_TOGGLE = 'http://127.0.0.1:5000/toggleItem';

export const fetchTasks = async () => {
    return await fetch(URL_TASK);
}

export const saveTaskToDB = async (task: string) => {
    await fetch(URL_SAVE_ITEM, {
            headers: {
                'Content-Type': 'application/json',
            }, 
            method: 'POST',
            body: JSON.stringify({'name': task})
        });
}

export const removeTaskToDB = async (task: string) => {
    await fetch(URL_REMOVE_ITEM, {
        headers: {
            'Content-Type': 'application/json',
        }, 
        method: 'POST',
        body: JSON.stringify({'name': task})
    })
}

export const updateTaskDB = async (id: number, achieved: boolean) => {
    await fetch(URL_TOGGLE, {
        headers: {
            'Content-Type': 'application/json',
        }, 
        method: 'POST',
        body: JSON.stringify({'id': id, 'achieved': achieved})
    })
}