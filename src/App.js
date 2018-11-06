import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Offers from './components/Offers';
import Shopping from './components/Shopping';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Main/>
				<Offers/>
				<Shopping/>
				<Footer/>
			</div>
		);
	}
}

export default App;
