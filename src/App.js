import React			from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

export default class App extends React.Component {
  constructor(props){
		super(props);
		this.state = {
		};
	}

  render() {
    return (
      <div className="App">
        <h1> It App.js</h1>
        <Header />
        <div className="App-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
