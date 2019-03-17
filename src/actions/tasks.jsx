export const addTask = (task) => {
    console.log("Create Action Task - "+ task)
    return {
        type:'ADD_TASK',
        payload:{
            task
        }
    }
}