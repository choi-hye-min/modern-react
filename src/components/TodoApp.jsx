import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from '../actions/tasks';

class TodoApp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    _handleAddTask = (e) => {
        const target = document.getElementById("input-task");
        let task = target.value.trim();

        this.props.addTask(task)
        target.value = "";
    }

    componentDidMount() {

    }

    render() {
        let self = this;

        return (
            <div>
                <input id={"input-task"} type={"text"} />
                <input onClick={self._handleAddTask} type={"button"} value={"등록"} />
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
    /*return { addTask: (task) => dispatch(addTask(task)) }*/
    return bindActionCreators(TodoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);