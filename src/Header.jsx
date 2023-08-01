import React from 'react';
import logo from './image/companylogo.png';

const Header = () => {
  return (
      <>
      <div className='header'>
        <img src={logo} alt='logo' width='70px' height='50px'></img>
        <h1>Wajid keep</h1>
        
      </div>
   </>
  )
}
export default Header;