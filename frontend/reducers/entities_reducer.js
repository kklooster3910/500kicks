import { combineReducers } from 'redux';
import photosReducer from './photos_reducer';
import usersReducer from './users_prof_reducer';

export default combineReducers({
    photos: photosReducer,
    users: usersReducer
});



