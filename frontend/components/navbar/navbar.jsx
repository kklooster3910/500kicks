import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( { currentUser, logout, errors } ) => {
    // debugger;

    let error;
    // debugger;
    const display = currentUser ? (
        <div>
            <p>Logged in as: {currentUser.username}</p>
            <button onClick={logout}>Logout</button>
        </div>   
    ) : (
        <div className='session-btns'>
            <Link className='button' to='/signup'>Sign Up</Link>
            <Link className='button' to='/login'>Log In</Link>
        </div>
    )
        
    if (typeof errors === 'object'){
        error = Object.values(errors);
    }    
    // debugger;
    return (
        <header className='nav-bar'>
            <h1 className='logo'>500kix!</h1>
            <div>
                {error}
                {display}
            </div>
        </header>
    )
};

export default NavBar;