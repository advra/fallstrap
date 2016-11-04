import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteTaskAction} from '../actions/ActionIndex';
import {editTaskAction} from '../actions/ActionIndex';
import {toggleAddBtnAction} from '../actions/ActionIndex';
import {addTaskAction} from '../actions/ActionIndex';

class TaskBoard extends Component {
    renderAddModule(){
        if(this.props.tasks.renderAdd){
            return(
                <div>
                    <input type="text" className="form-control" placeholder="Schedule a Task" ref="taskid" defaultValue=""></input>
                    <button onClick={() => this.props.addTaskBtn()} type="button" className="btn btn-default pull-right">Submit</button>
                    <button onClick={() => this.props.toggleAddBtn()} type="button" className="btn btn-danger pull-right">Cancel</button>
                    <br/>
                    <br/>
                </div>    
            );
        }else{
            return(
                <div>
                    <button onClick={() => this.props.toggleAddBtn()} type="button" className="btn btn-default button-full">Add Task</button>
                </div>
            );

        }
    }

    renderList() {
        //console.log(this.props.tasks.tasks);
        return this.props.tasks.tasks.map((task) => {
            if(task.status == "pending"){
                return (
                    <li key={task.id}>
                        {task.id} {task.description}
                        <button type="button">Finish</button>
                        <button type="button">Edit</button>
                        <button onClick={() => this.props.deleteTask(task)} type="button">Delete</button>
                    </li>
                );
            }
            // else{
            //     return(
            //         <div key={task.id}>
            //             TASK COMPLETED
            //         </div>
            //     );
            // }
        });
    }


    render() {
        //if null then display
        // if (!this.props.tasks) {
        //     console.log(this.props.tasks);
        //     return (<div>You currently have no tasks, please first create one...</div>);
        // }
        return (
            <div>
                {this.renderAddModule()}
                {this.renderList()}
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
            toggleAddBtn: toggleAddBtnAction,
            addTaskBtn: addTaskAction
        }, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(TaskBoard);
