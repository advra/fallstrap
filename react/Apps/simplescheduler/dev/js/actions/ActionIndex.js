//action creator function (called from application) which returns
//an object called the action

//actions tell application something happened
//reducer handles announcements
export const addTaskAction = (task) => {
    //below is what is returned known as the Action
    return {
    	//descriptive string
        type: 'ADD_TASK',
        //any info needed to give app in this case the object task
        text: "Here is a sample description",
        status: "pending"
    }
};

export const deleteTaskAction = (task) => {
    console.log("DELETING: " + task.id);
    return {
        type: 'DELETE_TASK',
        payload: task
        //payload: [...task.slice(0, this.index), ...task.slice(this.index+1)]
        //payload: task = [...task.slice(0, this.index), ...task.slice(this.index+1)]
    }
};

export const editTaskAction = (task) => {
    return {
        type: 'EDIT_TASK',
        status: "deleted"
    }
};