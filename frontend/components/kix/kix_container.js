import DiscoverKix from './discover_kix';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchPhotos, fetchPhoto } from '../../actions/photo_actions';

const msp = state => ({
    photos: Object.values(state.entities.photos)
});

const mdp = dispatch => ({
    fetchPhotos: () => dispatch(fetchPhotos()),
    fetchPhoto: id => dispatch(fetchPhoto(id))
});

// you might be able to use fetchPhoto when you are going to click on a photo from the discover page

export default withRouter(connect(msp, mdp)(DiscoverKix));