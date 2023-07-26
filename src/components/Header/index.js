import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='header'>
      <div className='header-items'>
        <Link className='heading' to='/'><h1 >My <span>E</span>Commerce App</h1></Link>
      </div>
    </header>
  );
};

export default Header;