import LikeButton from './like_button';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchLikes, removeLike, createLike } from '../../actions/like_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    allLikes: state.entities.likes,
    photo: state.entities.photos[ownProps.match.params.photoId]
})

const mdp = dispatch ({
    fetchLikes: () => dispatch(fetchLikes()),
    removeLike: id => dispatch(removeLike()),
    createLike: like => dispatch(createLike(like))
})

export default withRouter(connect(msp, mdp )(LikeButton))