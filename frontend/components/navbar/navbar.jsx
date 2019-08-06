import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DropDownComponent from './dropdown'

const NavBar = ( { currentUser, logout } ) => {
    const uploadPhotoButton = currentUser ? (
        <div className='uploadkix-button-container'>
            <Link to='/uploadphoto'><button className='upload-kix-nav-btn'>Upload Some Kix</button></Link>
            <Link to={`/users/${currentUser.id}`}><button className='profile-nav-btn'>Profile</button></Link>
        </div>
    ) : (
        <div className='uploadkix-button-container'></div>
    );

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
    
    let discoverKixLink = <Link to='/kix'><button className='discover-kix-navbtn'>Discover Kix!</button></Link>
    
    return (
        <header className='nav-bar'>
            <div className='logo-links'>
                <Link to='/'><div className='logo'>500kix!</div></Link>
                <span className='discover-kix-link'>{discoverKixLink}</span>
                {uploadPhotoButton}
            </div>
            <div>
                {display}
            </div>
        </header>    
    )
};

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
});

export default connect(msp, mdp)(NavBar)
