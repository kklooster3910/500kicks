import merge from 'lodash/merge';
import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
            return merge({}, state, action.likes);
        case RECEIVE_LIKE:
            // debugger;
            return merge({}, state, {[action.like.id]: action.like });
        case RECEIVE_PHOTO:
            // debugger;
            return merge({}, state, action.payload.likes)
        case REMOVE_LIKE:
            const oldLikes = merge({}, state, {[action.like.id]: action.like});
            delete oldLikes[action.like.id];
            return oldLikes;
        default:
            return state;
    }
}

export default likesReducer