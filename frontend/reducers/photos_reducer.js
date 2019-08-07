import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, RECEIVE_PHOTO_UPLOAD } from '../actions/photo_actions';
import merge from 'lodash/merge';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_RESET_ERRORS } from '../actions/photo_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nLikes;
    let newState;
    // debugger;
    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return merge({}, state, action.photos);
        case RECEIVE_PHOTO:
            return merge({}, state, {[action.payload.photo.id]: action.payload.photo});
        case RECEIVE_PHOTO_UPLOAD:
            return state;
        case RECEIVE_LIKE:
            newState = merge({}, state);
            nLikes = state[action.like.photo_id].likes;
            nLikes.push(action.like);
            newState[action.like.photo_id].likes = nLikes;
            return newState;
        case REMOVE_LIKE:
            let oLikes = state[action.like.photo_id].likes;
            nLikes = [];
            for (let i = 0; i < oLikes.length; i++) {
                if (oLikes[i].photographer_id !== action.like.photographer_id) {
                    nLikes.push(oLikes[i]);
                };
            };
            newState = merge({}, state);
            newState[action.like.photo_id].likes = nLikes;
            return newState;
        // case RECEIVE_RESET_ERRORS:
        //     return [];
        case RECEIVE_USER_PROFILE:
            return action.payload.photos;
            // return merge({}, state, { [action.payload.user.id]: action.payload.user })
        case RECEIVE_CURRENT_USER:
            return action.user.photos;
        default: 
            return state;
    };
};

export default photosReducer;