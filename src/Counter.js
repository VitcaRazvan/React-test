import React from 'react';

class Counter extends React.Component{
	constructor(){
		super();
		this.state={
			counter:0,
		};
	}

	render(){
		return(
			<div>
			<button
				onClick={()=>{ this.setState({counter: this.state.counter + 1});
				}}
			>
			Count: {this.state.counter}
			</button>
			<button
				onClick={()=>{ this.setState({counter: this.state.counter = 0});
				}}
			>
			RESET
			</button>
			</div>
		);
	}

}

export default Counter;