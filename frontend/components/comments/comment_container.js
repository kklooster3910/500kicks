import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createComment, resetErrors } from '../../actions/comment_actions';
import Comments from './comments';
import { fetchPhotoComments } from '../../reducers/selectors';

const msp = (state, ownProps) => {

    const photo = state.entities.photos[ownProps.match.params.photoId]
    // debugger;
    return {
        photoComments: fetchPhotoComments(state, photo),
        photo: state.entities.photos[ownProps.match.params.photoId],
        currentUser: state.entities.users[state.session.id],
        errors: state.entities.errors
    }
}

const mdp = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    resetErrors: () => dispatch(resetErrors())
})

export default withRouter(connect(msp, mdp)(Comments))