import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    // debugger;
    switch(action.type) {
        case RECEIVE_USER_PROFILE:
            return merge({}, state, {[action.payload.user.id]: action.payload.user})
        case RECEIVE_CURRENT_USER:
            // debugger;
            return merge({}, state, {[action.user.user.id]:action.user.user})
        default:
            return state
    }
}

export default usersReducer;