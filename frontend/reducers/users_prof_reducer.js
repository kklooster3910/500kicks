import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_USER_PROFILE:
            return merge({}, state, {[action.user.id]: action.user})
        default:
            return state
    }
}

export default usersReducer;