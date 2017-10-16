import React, { Component } from 'react';
import Navbar from '../Navbar'
import Searcher from './../Searcher'
import './css/Header.css';

class Header extends Component {
  render() {
    return (
    	<div className="Header">
        	<Navbar title="Badenblog"/>
          <Searcher/>
    	</div>
    );
  }
}

export default Header;
