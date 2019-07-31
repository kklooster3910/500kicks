import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( { currentUser, logout } ) => {
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
                <Link to='/login'><button className='nav-login-button'>Log In</button></Link>
                <Link to='/signup'><button className='nav-session-button'>Sign Up</button></Link>
        </div>
    )
        
    // if (typeof errors === 'object'){
    //     error = Object.values(errors);
    // }    
    // debugger;
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