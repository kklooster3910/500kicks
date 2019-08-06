import { combineReducers } from 'redux';
import photosReducer from './photos_reducer';
import usersReducer from './users_prof_reducer';
import likesReducer from './likes_reducer';

export default combineReducers({
    photos: photosReducer,
    users: usersReducer,
    likes: likesReducer,
});



