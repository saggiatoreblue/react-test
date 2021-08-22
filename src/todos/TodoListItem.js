import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({todo, onRemovePressed, onCompletePressed}) => (
    <div className="list-group-item text-center">
        <h3 className="text-uppercase">{todo.text}</h3>
        <div className="btn-group">

            <button
                className="btn btn-outline-primary"
                onClick={() => onCompletePressed(todo.id)}
                disabled={todo.isCompleted}
            >
                Mark as Completed
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => onRemovePressed(todo.id)}
            >
                Remove
            </button>
        </div>
    </div>
);


export default TodoListItem;
