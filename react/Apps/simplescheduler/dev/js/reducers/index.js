import {combineReducers} from 'redux';
import Tasks from './reducer-tasks';
//import TaskActions from './reducer-handle-tasks';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

//main master object "store"
//takes in each reducer as an object

const allReducers = combineReducers({
    //tasks: Tasks,
    //this will handle the task actions
    //taskactions: TaskActions
    tasks: Tasks
});

export default allReducers
