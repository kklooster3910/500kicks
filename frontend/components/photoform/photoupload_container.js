import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createPhoto, resetErrors } from '../../actions/photo_actions';
import PhotoForm from './photoupload_form';

const msp = state => ({
    errors: state.errors,
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    uploadPhoto: photo => dispatch(createPhoto(photo)),
    resetErrors: () => dispatch(resetErrors)
});

export default withRouter(connect(msp,mdp)(PhotoForm))
