import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, RECEIVE_PHOTO_UPLOAD } from '../actions/photo_actions';
import merge from 'lodash/merge';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nLikes;
    let newState
    // debugger;
    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return merge({}, state, action.photos);
        case RECEIVE_PHOTO:
            return merge({}, state, {[action.payload.photo.id]: action.payload.photo});
        case RECEIVE_PHOTO_UPLOAD:
            return state;
        case RECEIVE_LIKE:
            newState = merge({}, state)
            nLikes = state[action.like.photo_id].likes;
            nLikes.push(action.like)
            newState[action.like.photo_id].likes = nLikes
            return newState
            // return merge({}, state, { [action.like.photo_id]: { likes: [action.like] }});
        case REMOVE_LIKE:
            let oLikes = state[action.like.photo_id].likes;
            nLikes = [];
            // oLikes.forEach( like => {
            //     // debugger;
            //     // debugger;
            //     if (like.photographer_id !== action.like.photographer_id) {
            //        nLikes.push(like)
            //     }
            // })
            for (let i = 0; i < oLikes.length; i++) {
                if (oLikes[i].photographer_id !== action.like.photographer_id) {
                    nLikes.push(oLikes[i]);
                };
            };
            newState = merge({}, state);
            newState[action.like.photo_id].likes = nLikes;
            // debugger;
            return newState;
        default: 
            return state;
    };
};

export default photosReducer;