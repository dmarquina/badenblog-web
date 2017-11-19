import React, { Component } from 'react';
import Navbar from '../Navbar'
import './css/Header.css';

class Header extends Component {
  render() {
    return (
    	<div className="Header">
        	<Navbar title="Badenblog"/>
    	</div>
    );
  }
}

export default Header;
