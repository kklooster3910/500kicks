import UserProfile from './user'
import { fetchUser } from '../../actions/user_actions';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
 

const msp = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id))
})

export default withRouter(connect(msp, mdp)(UserProfile))