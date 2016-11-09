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


export default function (state = initialState, action) {

    switch (action.type) {
        case 'TOGGLE_ADD':
            var toggleState = Object.assign({}, state);
            toggleState.renderAdd = !toggleState.renderAdd;
            return toggleState;
            break;

        case 'ADD_TASK':
            var newState = Object.assign({}, state);
            state.tasks.push(
                {
                    id: newState.size, 
                    description: action.text, 
                    status: "pending"
                }
            );
            newState.size ++;
            return newState;
            break;

        case 'EDIT_TASK':
            return action.payload;
            break;

        case 'DELETE_TASK':
            var newState = Object.assign({}, state);
            var index = state.tasks.indexOf(action.id);
            state.tasks.splice(index, 1);
            return newState;
            break;

    }

    return state;
}


