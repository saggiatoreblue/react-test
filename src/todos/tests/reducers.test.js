import { expect } from 'chai';
import { todos } from '../reducers';


describe('The todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is received', () => {
        const mockTodo = {text: 'hello', isCompleted: false};
        const mockAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: mockTodo
            }
        };

        const originalState = { isLoading: false, data: []};

        const expected = {
            isLoading: false,
            data: [mockTodo]
        }

        const actual = todos(originalState, mockAction);
        expect(actual).to.deep.equal(expected);
    })
});
