import 'node-fetch';

import { expect } from 'chai';
import { loadTodos} from '../thunks';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';


describe('The loadTodos thunk', () => {
    it('Dispatches the correct actions in the success scenario', async () => {
        const mockDispatch = sinon.spy();
        const mockTodos = [{text: '1'}, {text: '2'}];

        fetchMock.get('http://localhost:8080/todos', mockTodos);
        const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS'}
        const expectedSecondAction = {
            type: 'LOAD_TODOS_SUCCESS',
            payload: {
                todos: mockTodos
            }
        }

        await loadTodos()(mockDispatch);

        expect(mockDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(mockDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

        fetchMock.reset();
    });
});
