import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateLike } from '../../actions/like_actions';
import { createLike } from '../../util/like_api_util';

// class LikeButton extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.state = this.props.likes.currentUser.id.liked
//         // this.state = this.props.likes.photographer_id

//  handleLike() {
//     this.props.updateLike()
//  }
    
//     };

const LikeButton = ({ currentUser, like, removeLike, createLike }) => {
    // let likedButtonReturn; 
    // debugger;
    // if ((currentUser !== null) && (like !== undefined)) {
    //     likedButtonReturn = 
    //     <div>
    //         <button onClick={() => removeLike(like.id)}>Like Photo</button>
    //     </div>
    // } else if ((like === undefined) && (currentUser !== null)) {
    //     likedButtonReturn = 
    //     <div>
    //         <button onClick={() => createLike(like) }>Like Photo</button>
    //     </div>
    // } else {
    //     likedButtonReturn = <div onClick={() => alert('Please Login to Like a Photo')}></div>
    // }

    // return (
    //     <div className='like-button-container'>
    //         {likedButtonReturn}
    //     </div>
    // )
  
};

export default withRouter(LikeButton)

// const msp = state => {
//     debugger;
//     return ({
//     likes: state.entities.likes,
// })}

// const mdp = dispatch => ({
//     updateLike: id => dispatch(updateLike(id))
// })

// export default withRouter(connect(msp, mdp)(LikeButton))