/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up

//default in this case is null
export default function (state = null, action) {
    switch (action.type) {
        case 'EDIT_TASK':
        	//do stuff but must return data
        	console.log("Do actions");
            return action.payload;
            break;
        case 'DELETE_TASK':
            return action.payload;
            break;

    }
    return state;
}
