import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
// import errors from './errors';
// import entities from './entities'

export default combineReducers({
    session: sessionReducer,
});