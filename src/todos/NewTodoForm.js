import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest} from "./thunks";
import { getTodos } from './selectors';
import './NewTodoForm.css';


const NewTodoForm = ({ todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <form className="new-todo-form">
                            <input placeholder="Type your new todo here" onChange={e => setInputValue(e.target.value)} value={inputValue} type="text" className="form-control"/>
                            <div className="d-grid">
                                <button
                                    onClick={() => {
                                        const isDuplicateText = todos.some(todo => todo.text === inputValue);
                                        if (!isDuplicateText) {
                                            onCreatePressed(inputValue);
                                            setInputValue('');
                                        }
                                    }}
                                    type="button" className="btn btn-primary btn-block mt-2">Create Todo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    todos: getTodos(state)
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
