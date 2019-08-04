import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, RECEIVE_PHOTO_UPLOAD } from '../actions/photo_actions';
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger;
    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return merge({}, state, action.photos);
        case RECEIVE_PHOTO:
            return merge({}, state, {[action.payload.photo.id]: action.payload.photo});
        case RECEIVE_PHOTO_UPLOAD:
            return state;
        default: 
            return state;
    };
};

export default photosReducer;