import { RECEIVE_SESSION_ERRORS, 
    RECEIVE_CURRENT_USER, 
    RECEIVE_RESET_ERRORS,
} from '../actions/session_actions';
import { RECEIVE_CREATE_PHOTO_ERRORS } from '../actions/photo_actions';
import { RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const errorsReducer = (state = {}, action) => {
    // debugger;
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return merge({}, state, action.errors)
        case RECEIVE_RESET_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return [action.errors]
        case RECEIVE_CREATE_PHOTO_ERRORS:
            if (!action.errors) {
                return ["Please Choose a Photo First"]
            } else {
                return merge({}, state, action.errors)
            }
        default:
            return state;
    }
};

export default errorsReducer;
