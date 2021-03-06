import * as APIReq from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_ALL_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_RESET_ERRORS = 'RECEIVE_RESET_ERRORS';
export const RECEIVE_PHOTO_UPLOAD = 'RECEIVE_PHOTO_UPLOAD';
export const RECEIVE_CREATE_PHOTO_ERRORS = 'RECEIVE_CREATE_PHOTO_ERRORS';


export const resetErrors = () => {
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

export const createPhoto = formData => dispatch => {
    return APIReq.createPhoto(formData).then( payload => {
        return dispatch({type: RECEIVE_PHOTO_UPLOAD, payload})},
          err => {
            return dispatch({ type: RECEIVE_CREATE_PHOTO_ERRORS, errors: err.responseJSON })
        }  
    );
};
