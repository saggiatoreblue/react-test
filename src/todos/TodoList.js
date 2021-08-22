import React, { useEffect } from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { getTodos, getTodosLoading, getCompleteTodos, getIncompleteTodos} from './selectors';

import { loadTodos , removeTodoRequest, completeTodoRequest} from './thunks';



const TodoList = ({completedTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos}) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>

    const content =  (
        <div className="container">
            <NewTodoForm/>
            <ul className="nav nav-tabs mt-3" role="tab-list">
                <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#incomplete" type="button" role="tab">Incomplete Todos</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#complete" type="button" role="tab">Completed Todos</button>
                </li>
            </ul>
            <div className="tab-content clearfix">
                <div className="tab-pane fade show active" id="incomplete">
                    <h3 className="mt-5">Incomplete Todos</h3>
                    <div className="list-group mt-3">
                        {incompleteTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}
                                                         onCompletePressed={onCompletePressed}/>)}
                    </div>
                </div>
                <div className="tab-pane fade" id="complete">
                    <h3 className="mt-5">Complete Todos</h3>
                    <div className="list-group mt-3">
                        {completedTodos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed}
                                                         onCompletePressed={onCompletePressed}/>)}
                    </div>
                </div>
            </div>
        </div>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompleteTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
