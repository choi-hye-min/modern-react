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

    _asyncIncrement = (e) => {
        this.props.asyncIncrement();
    }

    componentDidMount() {

    }

    render() {
        let self = this;

        return (
            <div>
                <div>
                    <h3>Counter : {this.props.counter}</h3>
                    <button style={{width:"150px", fontSize:"35px"}} onClick={self._asyncIncrement}>+</button>
                </div>

                <div style={{marginTop: "35px"}}>
                    <input id={"input-task"} type={"text"} />
                    <input onClick={self._handleAddTask} type={"button"} value={"등록"} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.get('counter')
    }
}

const mapDispatchToProps = (dispatch) => {
    /*return { addTask: (task) => dispatch(addTask(task)) }*/
    return bindActionCreators(TodoActions, dispatch)
}

/*TodoApp.defaultProps = {
    counter: 0,
    tasks: []
}*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);