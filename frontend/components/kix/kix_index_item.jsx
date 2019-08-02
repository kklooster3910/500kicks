import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';

export const KixIndexItem = ({ photo }) => {
    return(
        <li key={photo.id}>
            Photo id: {photo.id + ' '}
            Photo title: {photo.title + ' '}
            Photographer_id: {photo.photographer_id + ' '}
        </li>
    )     
}

// const msp = state => { 
//     debugger;
//     return ({
//     photo: state.photo
// })}

const mdp = dispatch => ({
    //stay tuned, we will probably end up needing something here
})

export default withRouter(connect(null, mdp)(KixIndexItem))