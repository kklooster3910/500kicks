import LikeButton from './like_button';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchLikes, removeLike, createLike } from '../../actions/like_actions';

const msp = (state, ownProps) => ({
    // currentUser: state.entities.users[state.session.id],
    currentUser: state.session.id,
    photo: state.entities.photos[ownProps.match.params.photoId],
    // allLikes: state.entities.likes
})

const mdp = dispatch => ({
    // fetchLikes: () => dispatch(fetchLikes()),
    removeLike: id => dispatch(removeLike(id)),
    createLike: like => dispatch(createLike(like))
})

export default withRouter(connect(msp, mdp )(LikeButton))