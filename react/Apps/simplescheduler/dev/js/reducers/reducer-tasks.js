/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * 
 *
 *note: this reducer contains an expandable array
 *      status can be 'pending' or 'finished'
 */

 //this function will only return an array of users
 //smaller data to be added to master object

//	tasks: [
const initialState = {
	tasks:[],                       //{id, description, status}
        renderAdd: false,           //this is used to enable or disable adding a task
        size: 0                     //size of id for task (each id is unique)
}

function getCurrentDate(){
    var dateObj = new Date();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    var year = dateObj.getFullYear();

    var newDate = month + "/" + day + "/" + year;
    return newDate;
}

export default function (state = initialState, action) {

    switch (action.type) {
        case 'TOGGLE_ADD':
            var toggleState = Object.assign({}, state);
            toggleState.renderAdd = !toggleState.renderAdd;
            return toggleState;
            break;

        case 'ADD_TASK':
            var newState = Object.assign({}, state);
            //check if empty
            state.tasks.push(
                {
                    id: newState.size, 
                    description: action.text,
                    stamp: getCurrentDate(),
                    status: "pending",
                    editThis: false,
                    completed: "NA"
                }
            );
            newState.size ++;
            return newState;
            break;

        case 'EDIT_TASK':
            var newState = Object.assign({}, state);
            for(var i = 0; i <= state.tasks.length; i++){
                if(state.tasks[i].id === action.id){
                    state.tasks[i].status = "edit";
                    return newState;
                    break;
                }
            }

        //action for when user finishes editting a task
        case 'SUBMIT_TASK_EDIT':
            console.log(action.payload);
            console.log(action.text);
            var newState = Object.assign({}, state);
            for(var i = 0; i <= state.tasks.length; i++){
                if(state.tasks[i].id === action.id){
                    state.tasks[i].description = action.text;
                    state.tasks[i].status = "pending";
                    return newState;
                    break;
                }
            }

        case 'FINISH_TASK':
            var newState = Object.assign({}, state);
            for(var i = 0; i<= state.tasks.length; i++){
                if(state.tasks[i].id === action.id){
                    state.tasks[i].status = "finished";
                    state.tasks[i].completed = getCurrentDate();
                    return newState;
                    break;
                }
            }

        case 'DELETE_TASK':
            var newState = Object.assign({}, state);
            for(var i = 0; i<= state.tasks.length; i++){
                if(state.tasks[i].id === action.id){
                    state.tasks.splice(i,1);
                    return newState;
                    break;
                }
            }

    }

    return state;
}


