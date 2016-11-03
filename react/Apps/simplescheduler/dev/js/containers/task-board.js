import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteTaskAction} from '../actions/ActionIndex';
import {editTaskAction} from '../actions/ActionIndex';

class TaskBoard extends Component {
    //for each task loop
    renderList() {
        return this.props.tasks.map((task) => {
            return (
                <li key={task.id}>
                    {task.id} {task.description}
                    <button type="button">Finish</button>
                    <button onClick={() => this.props.editTask(task)} type="button">Edit</button>
                    <button onClick={() => this.props.deleteTask(task)} type="button">Delete</button>
                </li>
            );
        });
    }


    render() {
        if (!this.props.tasks) {
            return (<div>Select a task...</div>);
        }
        return (
            <div>
                <li>
                    {this.renderList()}
                </li>

            </div>
        );
    }

}
//grabs specific peice of master object and assigns it to
//component's property
//passing the state as a property
function mapStateToProps(state) {
    return {
        //prop = peice of object from master
        tasks: state.tasks
    };
}

//note: dispatch is synonymous to call a function
//Pass action in as a property
function matchDispatchToProps(dispatch){
    //connect the action creators (functions in action) as a prop
    return bindActionCreators(
        //prop = function
        {
            deleteTask: deleteTaskAction,
            editTask: editTaskAction
        }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(TaskBoard);
