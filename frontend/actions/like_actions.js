import * as APIReq from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_RESET_ERRORS = 'RECEIVE_RESET_ERRORS';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

export const resetErrors = () => { // do I need to export
    //or have this in every action file? wtf ken
    return ({ type: RECEIVE_RESET_ERRORS })
};

export const fetchLikes = () => dispatch => (
    APIReq.fetchLikes().then( likes => (
        dispatch({ type: RECEIVE_ALL_LIKES, likes }), 
            err => dispatch({ type: RECEIVE_LIKE_ERRORS, errors: err.responseJSON }
        )
    ))
);

export const createLike = like => dispatch => (
    APIReq.createLike(like).then( like => (
        dispatch({ type: RECEIVE_LIKE, like }),
            err => dispatch({ type: RECEIVE_LIKE_ERRORS, errors: err.responseJSON }
        )
    ))
);

export const removeLike = id => dispatch => (
    APIReq.removeLike(id).then( like => (
        dispatch( { type: REMOVE_LIKE, like }),
            err => dispatch({ type: RECEIVE_LIKE_ERRORS, errors: err.responseJSON})
    ))
);
