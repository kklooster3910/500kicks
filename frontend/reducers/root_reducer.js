import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './error_reducer';
// import entities from './entities'

export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
});