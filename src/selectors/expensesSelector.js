
import moment from 'moment';

// Date startdates timestamps (milliseconds)
// January 1st 1970 (unix epoch) == 0, its the start date
// -1000, is one second before that and 10000 is 10 seconds after midnight


// get visable expenses
// this is a SELECTOR, whenever you want something FROM the store, you use one of these

// BUT FOR SIMPLICITY SAKE JUST EXPORT THIS ONE CONST FUNCTION
// who otherwise would have been called getVisableExpenses()
export default (expenses, { text, sortBy, startDate, endDate }) => {
	// destructor filters-object
	// will sort out which expenses from our expenses array to show

	return expenses
		.filter((expense) => {
			const createdAtMoment = moment(expense.createdAt); // create a moment from the current expense being filtered
			// ? downbelow means IF there is a startDate set it to the left option : else to the right (and why we set it to true? Its because then wee want all expenses to be shown )
			const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
			const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
			const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
			// if all threee of these are true then the expense in the array will be returned

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			//  a and b will automaticly be assigned for every compersion to
			// here we tag on to sort by amount or date
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});

	// use the method filter and the info we got from the
};
