import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import { Link } from 'react-router-dom';


export const KixIndexItem = ({ photo }) => {
    // debugger;
    return(
        <Link to={`/kix/${photo.id}`}><li key={photo.id}>
            Photo id: {photo.id + ' '}
            Photo title: {photo.title + ' '}
            Photographer_id: {photo.photographer_id + ' '}
            <img src={photo.image_url}/>
        </li></Link>
    )}

// const msp = state => { 
//     debugger;
//     return ({
//     photo: state.photo
// })}

const mdp = dispatch => ({
    //stay tuned, we will probably end up needing something here
})

export default withRouter(connect(null, mdp)(KixIndexItem))