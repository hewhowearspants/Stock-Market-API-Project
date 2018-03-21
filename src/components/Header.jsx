import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/bear-head-brown.png';

const Header = (props) => (
  <header>
      <img className='logo' src={logo} alt='logo' />
      <Link to='/'>
      <h1>stockr</h1>
      </Link>
  </header>
)

export default Header;