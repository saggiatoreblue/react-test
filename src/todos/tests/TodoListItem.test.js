import { expect } from 'chai';
import { getStyleForDate } from '../TodoListItem';

describe('getStyleForDate', () => {

    it('returns red when the date is greater than 5 days ago', () => {
        const today =  Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 6);

        const expected = 'red'
        const actual = getStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);

    });

    it('returns grey when the date is less than 5 days ago', () => {
        const today =  Date.now();
        const recentDate = new Date(Date.now() - 86400000 * 3);

        const expected = '#333'
        const actual = getStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);

    });

});
