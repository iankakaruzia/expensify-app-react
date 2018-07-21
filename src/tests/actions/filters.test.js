import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date on action object', () => {
    const actionStart = setStartDate(moment(0));
    expect(actionStart).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const actionEnd = setEndDate(moment(0));
    expect(actionEnd).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sort by amount action object', () => {
    const actionAmount = sortByAmount();
    expect(actionAmount).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sort by date action object', () => {
    const actionDate = sortByDate();
    expect(actionDate).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set a value for text filter action object', () => {
    const actionTextValue = setTextFilter('Rent');
    expect(actionTextValue).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });
});

test('should generate set the default value for text filter action object', () => {
    const actionTextDefault = setTextFilter();
    expect(actionTextDefault).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});