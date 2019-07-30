import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS,
} from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
    id: null
};

const sessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    // debugger;
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { id: action.user }); //probs change this ret obj to action.user.id
        case LOGOUT_CURRENT_USER:
            return nullUser;
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default sessionReducer;