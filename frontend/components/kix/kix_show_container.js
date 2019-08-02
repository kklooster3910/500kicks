import KixShow from './kix_show';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';

const msp = (state, ownProps) => ({
    photo: state.entities.photos[ownProps.match.params.photoId]
})

const mdp = dispatch => ({
    fetchPhoto: id => dispatch(fetchPhoto(id))
})

export default withRouter(connect(msp, mdp)(KixShow))