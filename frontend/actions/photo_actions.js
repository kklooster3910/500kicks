import * as APIReq from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_RESET_ERRORS = 'RECEIVE_RESET_ERRORS'

export const resetErrors = () => { //you might not need this, delete if no
    //add another cb to .then so that you can receive and handle errors
    return ({ type: RECEIVE_RESET_ERRORS})
};

export const fetchPhotos = () => dispatch => {
    return APIReq.fetchPhotos().then( photos => {
        return dispatch({type: RECEIVE_ALL_PHOTOS, photos})
    });
};

export const fetchPhoto = id => dispatch => {
    return APIReq.fetchPhoto(id).then( payload => {
        return dispatch({type: RECEIVE_PHOTO, payload})
    });
};

export const createPhoto = photo => dispatch => {
    debugger;
    return APIReq.createPhoto(photo).then( payload => {
        return dispatch({type: RECEIVE_PHOTO, payload})
    });
};

window.fetchPhotos = fetchPhotos;
window.fetchPhoto = fetchPhoto
