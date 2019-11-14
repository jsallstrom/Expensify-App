import React from 'react';
import ReactDOM from 'react-dom';
import Option from './components/Option';

import AddOptionForm from './components/AddOptionForm'; // check in components

class IndecisionApp extends React.Component {
	// MainApp part, this is the thing you render first

	constructor(props) {
		super(props);

		this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteASingleOption = this.handleDeleteASingleOption.bind(this);

		this.state = {
			options: [ 'one', 'two', 'three' ]
		};
	}

	// lifecycle method, this one runs when the application starts
	componentDidMount() {
		try {
			// we use try catch here when we wanna get saved data incase the data is corrupted

			console.log('componentDidMount: Fetching data!');
			const json = localStorage.getItem('options'); // get the options you have saved
			const options = JSON.parse(json);

			if (options) {
				// only set the option to what is saved IF THERE IS ANYTHING SAVED
				this.setState(() => ({ options: options })); // set the options in our state to the options we saved in localstorage that we have saved
			}
		} catch (error) {
			// do nothing at all if there is an error, just start up a new frsh veriosn of the app
		}
	}

	//Lifecycle method, this one runs when any component gets updated, you can use the previous state and props here also
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			//  dont save if the data in prevState has changed, just unnessesary
			console.log('componentDidUpdate: Saving data!');

			const jsonOptionsToBeSaved = JSON.stringify(this.state.options); // stringify the current state so it can be saved in localStorage, because it can only save strings
			localStorage.setItem('options', jsonOptionsToBeSaved);
		}
	}

	componentWillUnmount() {
		// cleaner method
		console.log('componentWillUnmount: time to clean!');
	}

	handleDeleteAllOptions() {
		this.setState(() => ({
			options: []
		}));

		/* Alternativ way to setState without arrow function
	
		Alittle more direct

		this.setState(() => {
			return {
				options: []
			};
		});
		
		// set a state and return a state with empty array on options
	
	*/
	}

	handleDeleteASingleOption(optionToRemove) {
		console.log('Deleted option', optionToRemove);
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return option !== optionToRemove; // return it into the list if it is NOT the option we wanna remove
			})
			// filters makes a new array with all the items that fill the criteria for the boolean
		}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length); // will get
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter Valid Value to add Value to the list';
		} else if (this.state.options.indexOf(option) > -1) {
			// if this is already in the list, if it already has an index, this returns -1 if it cant find it
			return 'Enter a value that isnt already in the list';
		}

		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	}

	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				{/*When you add stuff here it goes into the components this.props automaticly*/}
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />{' '}
				{/*send method down to Action Component so it can use it when a button is clicked in that component*/}
				<Options
					options={this.state.options}
					handleDeleteAllOptions={this.handleDeleteAllOptions}
					handleDeleteASingleOption={this.handleDeleteASingleOption}
				/>
				{/*We have to send this method down the chain as a prop to the component that will call it*/}
				<AddOptionForm handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{/*gets title from IndecisionApp when title is attached to Header through props*/}
			<p>{props.subtitle}</p>
		</div>
	);
};

// now here we have set so that if no title is provided in props, sent via props, then this is used
Header.defaultProps = {
	title: 'Default Title',
	subtitle: 'Default Subtitle'
};

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={!props.hasOptions}>
				what Should I do?
			</button>
		</div>
	);
};

// stateless component
const Options = (props) => {
	return (
		<div>
			{props.options.length === 0 && <p>Please add and option to get started!</p>}
			<button onClick={props.handleDeleteAllOptions}>Remove all options</button>{' '}
			{/*When this is clicked it will use the method handleDeleteAllOptions passed down as a prop from indecisionApp*/}
			{props.options.map((option) => (
				<Option key={option} optionText={option} handleDeleteASingleOption={props.handleDeleteASingleOption} />
			))}
			{/*Gotta have key=stuff or else error*/}
		</div>
	);
};

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
