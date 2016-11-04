//action creator function (called from application) which returns
//an object called the action

//actions tell application something happened
//reducer handles announcements

export function toggleAddBtnAction(){
    return{
        type: 'TOGGLE_ADD'
    }
}

export const addTaskAction = (task) => {
    //below is what is returned known as the Action
    return {
        type: 'ADD_TASK',
        text: "Here is a sample description"
    }
};

export const deleteTaskAction = (task) => {
    return {
        type: 'DELETE_TASK',
        payload: task.id-1 //get index array reference
    }
};

export const editTaskAction = (task) => {
    return {
        type: 'EDIT_TASK',
        payload: task
    }
};