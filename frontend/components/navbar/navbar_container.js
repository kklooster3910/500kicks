import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const msp = state => {
    // debugger;
    return {
        currentUser: state.session.id, 
        errors: state.errors
    }
};

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(NavBar)