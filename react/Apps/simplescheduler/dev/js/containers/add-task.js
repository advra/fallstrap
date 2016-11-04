import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTaskAction} from '../actions/ActionIndex';
import {editTaskAction} from '../actions/ActionIndex';

let AddTask = ({dispatch}) => {
    let input
    return (
        <div>
            <form><button type="submit">Add Task</button></form>        
        </div>
    )
}
AddTask = connect()(AddTask)

export default AddTask