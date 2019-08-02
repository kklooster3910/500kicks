import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import DiscoverKix from './discover_kix';

export const Kix = ({photo}) => {

    return(
        <li>
            {photo.id}
            {photo.title}
            {photo.photographer_id}
        </li>
    )     
}

const msp = state => ({
    photo: state.photo
})

const mdp = dispatch => ({
    //stay tuned, we will probably end up needing something here
})

export default withRouter(connect(msp, mdp)(Kix))