import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filter-actions';
import { sortByAmount } from '../actions/filter-actions';
import { sortByDate } from '../actions/filter-actions';
import {setStartDate, setEndDate } from '../actions/filter-actions';
import { DateRangePicker } from 'react-dates';

// what onChange does is that it calls a method everytime you change the value inside of it

class ExpenseListFilters extends React.Component{

	state = {
		calanderFocused: null, 
	};


	onDatesChange = ({startDate, endDate}) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));

	}


	onFocusChange = (calanderFocused) => {
		this.setState(() => ({calanderFocused: calanderFocused}))
	}

	render(){
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={(e) => {
						this.props.dispatch(setTextFilter(e.target.value));
						console.log(e.target.value);
					}}
				/>
				{/*So first we set a value (in these cases this.props.filters.text/sortBy) 
				then we set up an eventhandler for what will happen when value changes
				
				Dispatch an action to change the state of the Redux store*/}
				<select
					value={this.props.filters.sortBy}
					onChange={(e) => {
						if (e.target.value === 'date') {
							this.props.dispatch(sortByDate());
						} else if (e.target.value === 'amount') {
							this.props.dispatch(sortByAmount());
						}
					}}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>

				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calanderFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}

				/>

			</div>
		)
	}

}

// we use this component to have inputs we can write that will change what expenses to sort by and show

const mapStateToProps = (state) => {
	// get the filters from Redux state
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters); // send it in as props
