import * as APIReq from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const signup = user => dispatch => {
    // debugger;
    return APIReq.signup(user).then( user => {
        // debugger; 
        return dispatch({ type: RECEIVE_CURRENT_USER, user: user })},
            err => {
                // debugger;
                return dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON })}
    )
}

export const login = user => dispatch => {
    // debugger;
    return APIReq.login(user).then( user => {
        // debugger;
        return dispatch({ type: RECEIVE_CURRENT_USER, user: user })},
            err => { 
                // debugger;
                return dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON })}
        )
}

export const logout = () => dispatch => (
    APIReq.logout().then( user => (
        dispatch({ type: LOGOUT_CURRENT_USER, user: user })),
        err => (dispatch({ type: RECEIVE_SESSION_ERRORS, errors: err.responseJSON }))
    )
)

window.signup = signup
window.login = login
window.logout = logout