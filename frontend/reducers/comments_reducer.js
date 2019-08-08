import merge from 'lodash/merge';
import { RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT, 
} from '../actions/comment_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_COMMENTS:
            return merge({}, state, action.comments)
        case RECEIVE_COMMENT:
            return merge({}, state, { [action.comment.id]: action.comment })
        case RECEIVE_PHOTO:
            // debugger;
            // if (action.payload.photo.comment_ids.length < 1) {
            //     return state
            // } else {
            //     return action.payload.commments
            // }
            return merge({}, state, action.payload.comments)
        default:
            return state;
    }
}

export default commentsReducer;