import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( { currentUser, logout } ) => {
    const display = currentUser ? (
        <div className='session-btns'>
            <i class="far fa-user-circle"></i>
                <p className='currentUser-banner'>Logged in as: {currentUser.username}</p>
            <div className='drop-down'>
                <button className='loggedin-logout-btn drop-down-item' onClick={logout}>Logout</button>
            </div>
        </div>   
    ) : (
        <div className='session-btns'>
                <Link to='/login'><button className='nav-login-button'>Log In</button></Link>
                <Link to='/signup'><button className='nav-session-button'>Sign Up</button></Link>
        </div>
    )  

    return (
        <header className='nav-bar'>
            <h1 className='logo'>500kix!</h1>
            <div>
                {display}
            </div>
        </header>
    )
};

export default NavBar;