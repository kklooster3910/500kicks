import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
    id: null
};

const sessionReducer = (state = nullUser, action) => {
    Object.freeze(state);
    // debugger;
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { id: action.user.user.id }); //probs change this ret obj to action.user.id
        case LOGOUT_CURRENT_USER:
            return nullUser;
        default:
            return state;
    }
};

export default sessionReducer;