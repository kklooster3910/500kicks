import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

const DropDown = ({ currentUser, logout }) => {

    return (
        <div className='drop-down'>
            <i className="far fa-user-circle"></i>
            <p className='currentUser-banner'>Logged in as: {currentUser.username}</p>
            <button className='loggedin-logout-btn drop-down-item' onClick={logout}>Logout</button>
        </div>
    )
} 

const msp = state => ({
    currentUser: state.session.id
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(DropDown)