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
                    {/* <div className='kix-index-image-and-photo-container'> */}
                        <div className='kix-index-image-title'>{photo.title} {photo.photographer}</div>
                        {/* <div className='kix-index-image-photographer'></div> */}
                    {/* </div> */}
                    {/* <span className='kix-index-image-photographer'></span> */}
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