import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, RECEIVE_PHOTO_UPLOAD } from '../actions/photo_actions';
import merge from 'lodash/merge';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_RESET_ERRORS } from '../actions/photo_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nLikes;
    let newState;
    let nComments;
    // debugger;
    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return merge({}, state, action.photos);
        case RECEIVE_PHOTO:
            // debugger;
            return merge({}, state, {[action.payload.photo.id]: action.payload.photo});
        case RECEIVE_PHOTO_UPLOAD:
            return state;
        case RECEIVE_LIKE:
            // debugger;
            newState = merge({}, state);
            nLikes = state[action.like.photo_id].like_ids;
            nLikes.push(action.like.id);
            newState[action.like.photo_id].like_ids = nLikes;
            return newState;
        case REMOVE_LIKE:
            // debugger;
            let oLikes = state[action.like.photo_id].like_ids;
            nLikes = [];
            for (let i = 0; i < oLikes.length; i++) {
                if (oLikes[i] !== action.like.id) {
                    nLikes.push(oLikes[i]);
                };
            };
            newState = merge({}, state);
            newState[action.like.photo_id].like_ids = nLikes;
            return newState;
        // case RECEIVE_RESET_ERRORS:
        //     return [];
        case RECEIVE_USER_PROFILE:
            // debugger;
            if (action.payload.photos === undefined) {
                return state;
            } else {
                return merge({}, state, action.payload.photos)
            }
            // return action.payload.photos;
            // return merge({}, state, { [action.payload.user.id]: action.payload.user })
        case RECEIVE_CURRENT_USER:
            if (action.user.photos === undefined) {
                return state;
            } else {
                return action.user.photos;
            }
        case RECEIVE_COMMENT: 
            newState = merge({}, state);
            nComments = state[action.comment.photograph_id].comment_ids;
            nComments.push(action.comment.id)
            newState[action.comment.photograph_id].comment_ids = nComments;
            return newState;
        default: 
            return state;
    };
};

export default photosReducer;