import Home from './home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = state => {
    // debugger;
    return ({
    demoUser: { username: "Tyler Durden", email: "fight@club.net", password: "password123"},
    currentUser: state.session.id,
    // loggedinUser: state.session.users[state.session.id]
})}

const mdp = dispatch => ({
    demoLogin: demoUser => dispatch(login(demoUser)),
    fetchUser: user => dispatch(fetchUser(user))
})

export default withRouter(connect(msp, mdp)(Home));
