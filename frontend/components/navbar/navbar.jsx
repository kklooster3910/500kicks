import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import DropDownComponent from './dropdown'

const NavBar = ( { currentUser, logout } ) => {
    const display = currentUser ? (
        <div className='session-btns'>
            {/* <div className='drop-down'>
                <i className="far fa-user-circle"></i>
                <p className='currentUser-banner'>Logged in as: {currentUser.username}</p>
                <button className='loggedin-logout-btn drop-down-item' onClick={logout}>Logout</button>
            </div> */}
            <DropDownComponent />
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

const msp = state => ({
    currentUser: state.session.id,
});

const mdp = dispatch => ({
    // logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(NavBar)

// export default NavBar;