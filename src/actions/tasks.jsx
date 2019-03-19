export const addTask = (task) => {
    console.log("Create Action Task - "+ task)
    return {
        type:'ADD_TASK',
        payload:{
            task
        }
    }
}

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