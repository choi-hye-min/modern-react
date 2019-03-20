import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import Movies from './Movies';
import * as TodoActions from '../actions/tasks';

class TodoApp extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            btnDisabled: false,
            sampleText: "abc"
        }
    }

    _handleAddTask = (e) => {
        const target = document.getElementById("input-task");
        let task = target.value.trim();

        this.props.addTask({task}) // createAction사용
        target.value = "";
    }

    _asyncIncrement = (e) => {
        this.props.asyncIncrement();
    }

    _handleLoadMovie = () => {
        // 버튼 비활성화 중복방지
        this.setState({btnDisabled: true});

        this.props.addMovie()
            .then(() => {
                this.setState({btnDisabled: false}); // Load 완료 버튼 활성화
            });

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

                <hr/>
                <div>
                    <button style={{width:"350px", fontSize:"35px"}} onClick={self._handleLoadMovie} disabled={self.state.btnDisabled}>Movie Async Load</button>
                    <Movies movies={self.props.movies}/>
                </div>
                <hr/>

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
        counter: state.get('counter'),
        movies: state.get('movies')
    }
}

const mapDispatchToProps = (dispatch) => {
    /*return { addTask: (task) => dispatch(addTask(task)) }*/
    return bindActionCreators(TodoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);