import React, {Component} from 'react';

import {addTask} from '../actions/tasks';

class TodoApp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    _handleAddTask = (e) => {
        const target = document.getElementById("input-task");
        let task = target.value.trim();

        this.props.store.dispatch(addTask(task))
        target.value = "";
    }

    render() {
        let self = this;
        const tasks = self.props.store.getState().tasks;

        return (
            <div>
                <input id={"input-task"} type={"text"} />
                <input onClick={self._handleAddTask} type={"button"} value={"등록"} />
                <ul>
                    {
                        tasks.map((task, key) => {
                            return (
                                <li key={key}>{task.payload.task}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoApp;