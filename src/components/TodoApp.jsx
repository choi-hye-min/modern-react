import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
        //addTask(task);
        target.value = "";
    }

    componentDidMount() {
        //console.log(this.props)
    }

    render() {
        let self = this;

        return (
            <div>
                <input id={"input-task"} type={"text"} />
                <input onClick={self.props.onTest} type={"button"} value={"등록"} />
                <ul>
                    {
                        this.props.tasks.map((task, key) => {
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

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTest: () => dispatch(addTask('추가된 task'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);