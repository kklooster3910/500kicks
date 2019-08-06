import KixShow from './kix_show';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import { fetchLikes, removeLike, createLike } from '../../actions/like_actions'

const msp = (state, ownProps) => {
    return ({
    photo: state.entities.photos[ownProps.match.params.photoId],
    allLikes: state.entities.likes,
    currentUser: state.entities.users[state.session.id]
})}

const mdp = dispatch => ({
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    fetchLikes: () => dispatch(fetchLikes()),
    removeLike: id => dispatch(removeLike(id)),
    createLike: like => dispatch(createLike(like))
})

export default withRouter(connect(msp, mdp)(KixShow))