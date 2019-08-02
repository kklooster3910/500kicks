import { combineReducers } from 'redux';
import photosReducer from './photos_reducer'

export default combineReducers({
    photos: photosReducer
});



