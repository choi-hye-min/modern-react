import { handleActions, createAction } from 'redux-actions';
import axios from "axios";

/*export const addTask = (task) => {
    console.log("Create Action Task - "+ task)
    return {
        type:'ADD_TASK',
        payload:{
            task
        }
    }
}*/

export const addTask = createAction('ADD_TASK'); // createAction 사용

// redux-thunk를 이용하여 비동기 처리를 하고 있다.
export const asyncIncrement = () => {
    return (dispatch, getState) => {

        console.log(getState().toJS());

        setTimeout(() => {
            dispatch({
                type: 'ADD_COUNTER'
            })
        }, 1000)
    }
}

export const addMovie = () => {
    return (dispatch, getState) => {
        return axios.get('https://yts.am/api/v2/list_movies.json')
            .then(res => {
                dispatch({
                    type: 'ADD_MOVIE',
                    payload: res.data.data.movies
                })
            })
    }
}