
const URL_LIST = 'http://127.0.0.1:5000/list';
const URL_SAVE_ITEM = 'http://127.0.0.1:5000/saveItem';
const URL_REMOVE_ITEM = 'http://127.0.0.1:5000/removeItem';

export const fetchTasks = async () => {
    return await fetch(URL_LIST);
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