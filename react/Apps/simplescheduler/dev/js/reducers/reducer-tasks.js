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

const initialState = {
	tasks: [
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
	]
}

// export default function () {
// 	return [
// 		{
//             id: 1,
//             description: "This is a task",
//             status: "pending"
//         },
//         {
//             id: 2,
//             description: "This is another task",
//             status: "pending"
//         },
//         {
//             id: 3,
//             description: "This is an easy task",
//             status: "pending" 

//         }
// 	];	
// }

export default function (state = initialState, action) {

    switch (action.type) {
        case 'ADD_TASK':
            return Object.assign({}, state, {
            	tasks: [
            		...state.tasks,
            		{
            			description: action.text,
            			status: action.status
            		}
            	]
            })
            break;

        case 'EDIT_TASK':
            return action.payload;
            break;

        case 'DELETE_TASK':
            return Object.assign({}, state, {
            	status: action.status
            })
            break;
    }

    return state;
}


