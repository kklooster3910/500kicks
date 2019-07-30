import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup'

// we don't need to msp because ...
// setup doesn't rely on any part of state, EXCEPT FOR MAYBE ERRORS?!

const msp = state => ({
    errors: state.errors
})

const mdp = dispatch => {
    return ({
    createUser: user => dispatch(signup(user)),
})};

export default connect(msp, mdp)(Signup);