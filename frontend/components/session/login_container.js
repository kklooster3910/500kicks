import React from 'react';
import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import Login from './login'

const msp = state => ({
    errors: state.errors,
})

const mdp = dispatch => ({
    userLogin: user => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
})

export default connect(msp, mdp)(Login)