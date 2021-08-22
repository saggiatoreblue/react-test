import React from 'react';
import {hot} from 'react-hot-loader';
import TodoList from './todos/TodoList';
import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 1rem;
  font-family: 'Urbanist', sans-serif;
  color: #666;
`;

const App = () => (
    <StyledApp className="App">
        <TodoList />
    </StyledApp>
);

export default hot(module)(App);
