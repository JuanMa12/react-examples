import React			from 'react';
import './../App.css';

export default class Register extends React.Component {
  constructor(props){
		super(props);
		this.state = {
      btn : false
		};
	}

  _onChangeBtn(){
		let { btn }=this.state
    this.setState({
      btn: !btn
    });
  }

  render() {
    let {btn} = this.state

    let btn_text = '';
		if(btn) {
			btn_text = (<a className="btn btn-success">BTN TRUE</a>)
		} else {
      btn_text = (<a className="btn btn-danger">BTN FALSE</a>)
    }

    return (
      <div className="">
        <div className="App-register">
          <p>Register.js</p>
          <p>Component by register user</p>
          <div>
          { btn_text }
          </div>
          <button type="submit" onClick={this._onChangeBtn.bind(this)}
						className="btn btn-primary">
              Change btn
					</button>
        </div>
      </div>
    )
  }
}
