import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import React from 'react';
import { Link } from 'react-router-dom';
// import { fetchLikes } from '../../actions/like_actions' 


export const KixIndexItem = ({ photo }) => {
    // debugger;
    return(
        <div className='kix-index-item-image-container'>
            <Link to={`/kix/${photo.id}`}><div className='kix-index-item' key={photo.id}>
                <div className='kix-index-image-container'>
                    <span className='kix-index-image-title'>{photo.title}</span>
                    <span className='kix-index-image-photographer'>{photo.photographer}</span>
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
    // fetchLikes: () => dispatch(fetchLikes())
})

export default withRouter(connect(null, mdp)(KixIndexItem))