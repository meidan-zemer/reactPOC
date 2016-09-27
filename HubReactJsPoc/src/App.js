import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; 


class App extends Component {
	constructor(props){
		super(props);
		this.state =  {flowChart:null};
	}

	componentDidMount(){
		this.serverRequest = $.get(this.props.source, function (result) {
			console.log(result);
			this.setState({
				flowChart: result
			});
		}.bind(this));
	}
	componentWillUnmount(){
		this.serverRequest.abort();
	}	
	render() {
		return (
		  <div className="App">
			<div className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h2>Welcome to React</h2>		  
			</div>		
			<p className="App-intro">
			  To get started, edit <code>src/App.js</code> and save to reload.
			</p>	
		  </div>
		);
	}
}

export default App;
