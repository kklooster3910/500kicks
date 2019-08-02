import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return merge({}, state, action.photos);
        case RECEIVE_PHOTO:
            return merge({}, state, {[action.payload.photo.id]: action.payload.photo});
        default: 
            return state;
    };
};

export default photosReducer;