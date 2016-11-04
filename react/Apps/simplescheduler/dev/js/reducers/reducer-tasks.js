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
	tasks:[
			{
		        id: 1,
		        description: "This is a task",
		        status: "pending"
		    },
		    {
		        id: 2,
		        description: "This is another task",
		        status: "pending"
		    },
		    {
		        id: 3,
		        description: "This is an easy task",
		        status: "pending" 

		    }
		],
        renderAdd: false
}


export default function (state = initialState, action) {

    switch (action.type) {
        case 'TOGGLE_ADD':
            var toggleState = Object.assign({}, state);
            toggleState.renderAdd = !toggleState.renderAdd;
            //console.log(toggleState);
            return toggleState;
            break;

        case 'ADD_TASK':
            var testState = Object.assign({}, state);
            var addState = Object.assign({}, testState.tasks[state.tasks.length+1], {id: state.tasks.length+1, description: action.text, status: "pending"});
            console.log("ADDING");
            console.log(addState);
            //var addNewObj = Object.assign({}, state.tasks, addState);
            //console.log(addNewObj);
            //addState.task.push(addState);
            //delete tempState.renderAdd;
            state.push(addState);

            break;

        case 'EDIT_TASK':
            return action.payload;
            break;

        case 'DELETE_TASK':
        	// let newState = Object.assign({}, state);
        	// newState.tasks[action.payload].status = "deleted";
        	// //state = newState;
         //    return newState;
         //    break;
            var newState = Object.assign({}, state);
            if(newState.tasks.length != 1){
        		newState.tasks.splice(action.payload,1);
        	}else{
        		newState.tasks.pop();
        	}
        	//state = newState;
            return newState;
            break;

    }

    return state;
}


