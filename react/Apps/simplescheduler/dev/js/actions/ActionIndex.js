//action creator function (called from application) which returns
//an object called the action

//actions tell application something happened
//reducer handles announcements
export const deleteTaskAction = (task) => {
    //below is what is returned known as the Action
    return {
    	//descriptive string
        type: 'DELETE_TASK',
        //any info needed to give app in this case the object task
        payload: task
    }
};

export const editTaskAction = (task) => {
    return {
        type: 'EDIT_TASK',
        payload: task
    }
};