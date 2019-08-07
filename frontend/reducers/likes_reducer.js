import merge from 'lodash/merge';
import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
            return merge({}, state, action.likes);
        case RECEIVE_LIKE:
            return merge({}, state, {[action.like.photo_id]: action.like });
        case REMOVE_LIKE:
            const oldLikes = merge({}, state, {[action.like.id]: action.like});
            delete oldLikes[action.like.id];
            return oldLikes;
        default:
            return state;
    }
}

export default likesReducer