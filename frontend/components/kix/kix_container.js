import DiscoverKix from './discover_kix';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

const msp = state => {
    debugger;
    return ({
    photos: state.entities.photos
})};

const mdp = dispatch => {
    debugger;
    return ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: id => dispatch(fetchPhoto(id))
})};

export default withRouter(connect(msp, mdp)(DiscoverKix));