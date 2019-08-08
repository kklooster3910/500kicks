import LikeButton from './like_button';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchLikes, removeLike, createLike } from '../../actions/like_actions';
import { fetchPhotoLikes } from '../../reducers/selectors';

const msp = (state, ownProps) => {
    // debugger;
   
    const photo = state.entities.photos[ownProps.match.params.photoId]
    

    return {
        currentUser: state.session.id,
        photo: state.entities.photos[ownProps.match.params.photoId],
        photoLikes: fetchPhotoLikes(state, photo)
    }
}

const mdp = dispatch => ({
    fetchLikes: () => dispatch(fetchLikes()),
    removeLike: id => dispatch(removeLike(id)),
    createLike: like => dispatch(createLike(like))
})

export default withRouter(connect(msp, mdp )(LikeButton))