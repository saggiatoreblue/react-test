import React from 'react';
import './TodoList.css';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import {removeTodo, completeTodo} from './actions';


const TodoList = ({todos = [], onRemovePressed, onCompletePressed}) => (
    <div className="container">
        <NewTodoForm />
        <div className="list-group mt-3">
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed}/>)}
        </div>
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
