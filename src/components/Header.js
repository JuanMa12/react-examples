import React 		          from 'react';
import { Link } 					from 'react-router';
import './../App.css';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <h2>Header.js</h2>
        <ul className="nav navbar-nav">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/home">Home</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
