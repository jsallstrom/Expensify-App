import { addExpense, editExpense, removeExpense } from '../../actions/expense-actions';




test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'}); // we have alot of deafult values, but we add an id so we 
    // can see that its been removed
    expect(action).toEqual({ // .toEqual is used to compare two Objects and will return true if all its properties and variables are the same
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });


});



test('should setupr edit expense action object', () => {
    const action = editExpense('123abc', {note: 'New note value' });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }    
    })
    
});




test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        } // to compare this action we gotta know its id...
        // which is hard because it is dynamicly generated
        // luckily we can do expect-any() so we just expect something 
        // we can predict/expect
    })
})

test('should setup add expense action object with default values', () => {
    // Call addExpense with no data
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            "amount": 0,
            "createdAt": 0,
            "description": "",
            "note": ""
        }
    })

    // assert the value of the returned object
})


/*
    We get an error if we only run Jest without adding tthis line to the 
    Jest part in 

*/ 