import moment from "moment";

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date', // date or amount
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
}; // can also be more complex

// If we dont make this export we would maybe have to do an export, import and use like this filtersReducer.filtersReducer();
export default (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return { ...state, text: action.text };
		// copy of state BUT  update the single field of text in state

		case 'SORT_BY_DATE':
			return { ...state, sortBy: 'date' }; // I like it when following a simple rule, if you return an object, you have it all on one line, but if you return a function, more lines
		case 'SORT_BY_AMOUNT':
			return { ...state, sortBy: 'amount' };

		case 'SET_START_DATE':
			return { ...state, startDate: action.startDate };

		case 'SET_END_DATE':
			return { ...state, endDate: action.endDate };

		default:
			return state;
	}
}; //  now with the defaultstate in place we can start adding actions that will change the state in the switch
