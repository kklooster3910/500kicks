import UserProfile from './user'
import { fetchUser } from '../../actions/user_actions';
import { resetErrors } from '../../actions/photo_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchProfilePhotos } from '../../reducers/selectors';
 

const msp = (state, ownProps) => {
    // let photos;
    // debugger;
    // debugger;

    const user = state.entities.users[ownProps.match.params.userId];
    // debugger;
    // if (user.photo_id !== undefined) {
    //         photos = user.photo_ids.map(id => state.entities.photos[id]);
    //         // debugger;
    // } else { 
    //         photos = [];
    // }
    // user ? photos = user.photo_ids.map( id => state.entities.photos[id] ) : [];

    // photos: photos
    // debugger;
    return {
        currentProfile: user,
        photos: fetchProfilePhotos(state, user)
    }
}

const mdp = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    resetErrors: () => dispatch(resetErrors())
})

export default withRouter(connect(msp, mdp)(UserProfile))