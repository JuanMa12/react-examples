import React			from 'react';
import './../App.css';

let data_users = ['Ana','Alvaro','Luis','Mauricio'];

export default class Home extends React.Component {
  constructor(props){
		super(props);
		this.state = {
      users : data_users,
      view_user: false,
      date: new Date(),
      title: 'List Users'
		};
	}

  buttonUsers(){
    this.setState({'view_user': !this.state.view_user})
  }

  _filterUsers(event) {
    let listFilterUsers = this.state.users;
    if(event.target.value) {
      listFilterUsers = listFilterUsers.filter(function(item){
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({users: listFilterUsers});
    } else {
      this.setState({users: data_users});
    }
  }

  _renderUsers() {
    let states = this.state
    if(states.view_user) {
      let renderUsers =  states.users.map((item, i) => {
        return (
          <li key={i} value={item}>
            {item}
          </li>
        );
      });
      return renderUsers;
    }
  }

  render() {
    let states = this.state
    let name_btn = states.view_user ? 'Ocultar' : 'Ver';
    let class_input = !states.view_user ? 'none' : '';

    return (
      <div className="">
        <div className="App-house">
          <p>Home : Address</p>
          <h3>{states.title}</h3>
          <div>
            <ul>
              <input className={class_input} type="text" placeholder="Search" onChange={this._filterUsers.bind(this)}/>
              {this._renderUsers()}
            </ul>
            <button onClick={this.buttonUsers.bind(this)}>
              {states.view_user ? 'Ocultar' : 'Ver'} {name_btn} Usuarios
            </button>
            <p>Hora: <small>{states.date.toLocaleTimeString()}</small></p>
          </div>
        </div>
      </div>
    )
  }
}
