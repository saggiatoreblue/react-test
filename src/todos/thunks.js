import { createTodo, loadTodosInProgress, loadTodosFailure, loadTodosSuccess, removeTodo, completeTodo} from './actions';


export const loadTodos = () => async (dispatch, getState) => {

    try {
        dispatch(loadTodosInProgress());

        const resp = await fetch('http://localhost:8080/todos');
        const todos = await resp.json();

        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        console.error(e);
    }
}


export const addTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({text});
        const resp = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body
        });

        const todo = await resp.json();
        dispatch(createTodo(todo));
    } catch(e) {
        console.error(e);
    }
}


export const removeTodoRequest = id => async dispatch => {
    try {
        const resp = await fetch(`http://localhost:8080/todos/${id}`, { method: 'delete'});
        const todo = await resp.json();
        dispatch(removeTodo(todo));

    } catch(e) {
        console.error(e);
    }
}

export const completeTodoRequest = id => async dispatch => {
    try {
        const resp = await fetch(`http://localhost:8080/todos/${id}/completed`, { method: 'post'});
        const todo = await resp.json();
        dispatch(completeTodo(todo));
    } catch(e) {
        console.error(e);
    }
}
