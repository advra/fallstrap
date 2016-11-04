/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up

//default in this case is null
export default function (state = null, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return action.payload;
            break;
        case 'EDIT_TASK':
        	//do stuff but must return data
            //return action.payload;
            //console.log(state,action);
            //return Object.assign({}, state, {description: "This is an edit"})
            //return Object.assign({}, state, {task: []});
            return action.payload;
            //return Object.assign( {}, action.payload, {})
            break;
        case 'DELETE_TASK':
            //return Object.assign({},action.payload, {status: "deleted"});  // return task obj
            //var tmpObj = Object.assign({}, state, {status: "deleted"});
            return Object.assign({}, allReducers, {status: "deleted"});
            break;

    }
    return state;
}
