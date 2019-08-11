import * as APIReq from '../util/user_profile_api_util';

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

export const fetchUser = id => dispatch => {
    return APIReq.fetchUser(id).then( payload => {
        return dispatch({type: RECEIVE_USER_PROFILE, payload: payload})
    })
}
