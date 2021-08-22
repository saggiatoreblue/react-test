import React from 'react';
import styled from 'styled-components';

export const getStyleForDate = (startingDate, currentDate)  =>
    (startingDate < new Date(currentDate - 86400000 * 5) ? 'red' : '#333');

const TodoDate = styled.p`
    font-size: 16px;
`;

const TodoDateWarning = styled(TodoDate)`
  color: ${props => getStyleForDate(new Date(props.date), Date.now())};
`;

const ActionButtonGrp = styled.div`
  display: block;
  width: 100%;
`;
const ActionButton = styled.button`
  width: 50%;
`;


const TodoListItem = ({todo, onRemovePressed, onCompletePressed}) => {
    const TodosDate = todo.isCompleted ? TodoDate : TodoDateWarning

    return (
        <div className="list-group-item text-center">
            <h3>{todo.text}</h3>
            <TodosDate date={todo.createdAt}>Created on: {(new Date(todo.createdAt)).toLocaleDateString()}</TodosDate>
            <ActionButtonGrp className="btn-group">

                <ActionButton
                    className="btn btn-outline-primary"
                    onClick={() => onCompletePressed(todo.id)}
                    disabled={todo.isCompleted}
                >
                    Mark as Completed
                </ActionButton>
                <ActionButton
                    className="btn btn-outline-primary"
                    onClick={() => onRemovePressed(todo.id)}
                >
                    Remove
                </ActionButton>
            </ActionButtonGrp>
        </div>
    );
}


export default TodoListItem;
