import * as APIReq from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const signup = user => dispatch => (
    APIReq.signup(user).then( user => (
        dispatch({ type: RECEIVE_CURRENT_USER, user: user }),
        error => (dispatch({ type: RECEIVE_SESSION_ERRORS, errors: error.responseJSON }))
    ))
)

export const login = user => dispatch => (
    APIReq.login(user).then( user => (
        dispatch({ type: RECEIVE_CURRENT_USER, user: user }),
        error => ( dispatch({ type: RECEIVE_SESSION_ERRORS, errors: error.responseJSON}))
    ))
)

export const logout = () => dispatch => (
    APIReq.logout().then( user => (
        dispatch({ type: LOGOUT_CURRENT_USER, user: user })
    ))
)