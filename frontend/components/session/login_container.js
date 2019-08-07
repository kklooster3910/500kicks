import React from 'react';
import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import Login from './login';
import { withRouter } from 'react-router';

const msp = state => ({
    errors: state.errors,
})

const mdp = dispatch => ({
    userLogin: user => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
})

export default withRouter(connect(msp, mdp)(Login))