import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DropDownComponent from './dropdown'

const NavBar = ( { currentUser, logout } ) => {

    const display = currentUser ? (
        <div className='session-btns'>
            <DropDownComponent />
        </div>   
    ) : (
        <div className='session-btns'>
            <Link to='/login'><button className='nav-login-button'>Log In</button></Link>
            <Link to='/signup'><button className='nav-session-button'>Sign Up</button></Link>
        </div>
    )  
    
    let kixShowLink = <Link to='/kix'><button className='discover-kix-navbtn'>Discover Kix!</button></Link>
    
    return (
        <header className='nav-bar'>
            <h1 className='logo'>500kix!
                {kixShowLink}
            </h1>
            <div>
                {display}
            </div>
        </header>    
    )
};

const msp = state => ({
    currentUser: state.session.id,
});

const mdp = dispatch => ({
});

export default connect(msp, mdp)(NavBar)
