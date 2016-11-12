import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteTaskAction} from '../actions/ActionIndex';
import {editTaskAction} from '../actions/ActionIndex';
import {toggleAddBtnAction} from '../actions/ActionIndex';
import {addTaskAction} from '../actions/ActionIndex';
import {finishTaskAction} from '../actions/ActionIndex';
import {submitEditTaskAction} from '../actions/ActionIndex';

class TaskBoard extends Component {
    renderAddModule(){
        if(this.props.tasks.renderAdd){
            return(
                <div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Schedule a Task" 
                        ref="taskid" 
                        defaultValue=""  
                        >

                    </input>
                    <button 
                        onClick={() => this.props.addTaskBtn(this.refs.taskid.value)} 
                        type="button" 
                        className="btn btn-default pull-right"
                        >
                        Add
                    </button>

                    <button 
                        onClick={() => this.props.toggleAddBtn()} 
                        type="button" 
                        className="btn btn-danger pull-right"
                        >
                        Cancel
                    </button>
                </div>    
            );
        }else{
            return(
                <div>
                    <button 
                        onClick={() => this.props.toggleAddBtn()} 
                        type="button" 
                        className="btn btn-default button-full"
                        >

                        Add Task
                    </button>
                </div>
            );

        }
    }

    renderList() {
        return this.props.tasks.tasks.map((task) => {
            if(task.status == "pending"){
                return (
                    <li key={task.id}>
                        Assigned: {task.stamp} - {task.description}
                        <button 
                            type="button"
                            onClick={() => this.props.finishBtn(task)}
                            >
                            Finish
                        </button>
                        <button 
                            type="button"
                            onClick={() => this.props.editTask(task)}
                            >
                            Edit
                        </button>
                        <button 
                            onClick={() => this.props.deleteTask(task)} 
                            type="button"
                            >
                            Delete
                        </button>
                    </li>
                );
            }
            if(task.status == "edit"){
                return (
                    <li key={task.id}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Add a description" 
                            ref="edittaskid" 
                            defaultValue={task.description}  
                            >
                        </input>
                         <button 
                            onClick={() => this.props.finihEditBtn(task,this.refs.edittaskid.value)} 
                            type="button" 
                            className="btn btn-default pull-right"
                            >
                            Done
                        </button>
                    </li>
                );
            }

        });
    }

renderCompleted() {
        return this.props.tasks.tasks.map((task) => {
            if(task.status == "finished"){
                return (
                    <li key={task.id}>
                        Assigned: {task.stamp} - {task.description} - Completed: {task.completed}
                    </li>
                );
            }
        });
    }


    render() {
        if (this.props.tasks.tasks.length == 0) {
            return (
                <div>
                    {this.renderAddModule()}
                    You currently have no tasks, please first create one...
                </div>);
        }
        //render completed tasks too if any
        return (
            <div>
                {this.renderAddModule()}
                <b>Pending Tasks:</b>
                <br/>
                {this.renderList()}
                <br/>
                <b>Completed Tasks:</b>
                {this.renderCompleted()}
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
        //tasks: state.taskHandler
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
            editTask: editTaskAction,
            finihEditBtn: submitEditTaskAction,
            toggleAddBtn: toggleAddBtnAction,
            addTaskBtn: addTaskAction,
            finishBtn: finishTaskAction
        }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(TaskBoard);
