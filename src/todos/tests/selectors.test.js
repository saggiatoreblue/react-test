import { expect } from 'chai';
import { getCompleteTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
    it ('Returns only completed todos', () => {
        const fakeTodos = [
            {
                text: 'One',
                isCompleted: true
            },
            {
                text: 'Two',
                isCompleted: false
            },
            {
                text: 'Three',
                isCompleted: false
            }
        ];

        const expected = [{
            text: 'One',
            isCompleted: true
        }];

        const actual = getCompleteTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);

    })
});
