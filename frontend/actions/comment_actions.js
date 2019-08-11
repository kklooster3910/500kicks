import * as APIReq from '../util/comment_api_util';

export const RECEIVE_RESET_ERRORS = 'RECEIVE_RESET_ERRORS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const resetErrors = () => { 
    return ({ type: RECEIVE_RESET_ERRORS })
};

export const fetchComments = () => dispatch => (
    APIReq.fetchComments().then( comments => (
        dispatch({ type: RECEIVE_ALL_COMMENTS, comments})
    ), err => dispatch({ type: RECEIVE_COMMENT_ERRORS, err: err.responseJSON }))
)

export const createComment = comment => dispatch => (
    APIReq.createComment(comment).then( comment => (
        dispatch({ type: RECEIVE_COMMENT, comment})
    ), err => dispatch({ type: RECEIVE_COMMENT_ERRORS, err: err.responseJSON }))
)
