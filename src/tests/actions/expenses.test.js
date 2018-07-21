import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const actionRemove = removeExpense({ id: '123abc' });
    expect(actionRemove).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const actionEdit = editExpense('123abc', { note: 'Note Updated' });
    expect(actionEdit).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'Note Updated' }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const actionAddValues = addExpense(expenseData);
    expect(actionAddValues).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const actionAddDefault = addExpense(expenseData);
    expect(actionAddDefault).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});