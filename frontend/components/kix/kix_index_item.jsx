import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import { Link } from 'react-router-dom';


export const KixIndexItem = ({ photo }) => {
    // debugger;
    return(
        <div className='kix-index-item-image-container'>
            <Link to={`/kix/${photo.id}`}><div className='kix-index-item' key={photo.id}>
                <div className='kix-index-image-container'>
                    <span className='kix-index-image-title'>{photo.title}</span>
                    <span className='kix-index-image-title'>{photo.photographer}</span>
                    <img className='kix-index-item-image' src={photo.image_url} />
                </div>
                </div>
            </Link>
        </div>
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