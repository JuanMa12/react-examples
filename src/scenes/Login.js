import React			from 'react';
import './../App.css';

export default class Login extends React.Component {
  constructor(props){
		super(props);
		this.state = {
		};
	}

  render() {
    return (
      <div className="">
        <div className="App-login">
          <p>Login.js</p>
          <p>Component by login user</p>
          {/* <p>Comment text</p> */}
        </div>
      </div>
    )
  }
}
