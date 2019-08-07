import KixShow from './kix_show';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPhoto, resetErrors } from '../../actions/photo_actions';
import { fetchLikes, removeLike, createLike } from '../../actions/like_actions'

// const photoLikes = state => (
//     state.entities.likes
// )

const msp = (state, ownProps) => {
    // debugger

    let photoLikes;
    if (state.entities.photos[ownProps.match.params.photoId]) {
       photoLikes = state.entities.photos[ownProps.match.params.photoId].likes
    } else {
        photoLikes = []
    }

    return {
        photo: state.entities.photos[ownProps.match.params.photoId],
        photoLikes: photoLikes,
        allLikes: state.entities.likes 
    }

}

const mdp = dispatch => ({
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    resetErrors: () => dispatch(resetErrors())
    // fetchLikes: () => dispatch(fetchLikes()),
    // removeLike: id => dispatch(removeLike(id)),
    // createLike: like => dispatch(createLike(like))
})

export default withRouter(connect(msp, mdp)(KixShow))