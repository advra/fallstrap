import React from 'react';
import TaskBoard from "../containers/task-board";
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Task List</h2>
        <hr />
        <TaskBoard/>
    </div>
);

export default App;
