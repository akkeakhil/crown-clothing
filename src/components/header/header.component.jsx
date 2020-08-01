import React from  'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assests/crown.svg';

import './header.style.scss';
const Header = ({ currentUser }) =>(
  <div className='header'>
   <Link className='logo-container' to="/">
   <Logo className='logo'/>
   </Link>
   <div className='options'>
   <Link className='option' to='/shops'>
   SHOP
   </Link>
   <Link className='option' to='/shops'>
   CONTACT
   </Link>
   {
     currentUser?(
      <div className='option' onClick={()=>auth.signOut()}>
      SIGN OUT
      </div>
     )
     
     :(
      <Link className='option' to='/signin'>
      SIGN IN
      </Link>
     )
    
   }
   </div>
  </div>
);
const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);