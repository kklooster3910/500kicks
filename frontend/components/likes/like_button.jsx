import React from 'react';
import { withRouter } from 'react-router';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }
    
    

    // if (this.state) {
    //     let cLike = this.props.createLike
    //     this.setState({liked: true})   
    // } else {
    //     rLike = this.props.removeLike
    //     this.setState({ liked: false })
    // }

    let likeButton = <LikeButton
        createLike={cLike}
        removeLike={rLike}
        currentUser={this.props.currentUser}
        photoId={kix.id}
    /> 

    let likedButtonReturn; 
    if (!currentUser) {
        likedButtonReturn = <div onClick={() => alert('Please Login to Like a Photo')}>LIKE ME!</div>
    } else if (typeof createLike === 'function') {
        likedButtonReturn = <div onClick={() => createLike({photo_id: photoId, photographer_id: currentUser.id})}>LIKE ME!</div>
    } else {
        likedButtonReturn = <div onClick={() => removeLike({photo_id: photoId, photographer_id: currentUser.id})}>LIKE ME!</div>
    }
    
    
    render () {
        return (
            <div className='like-button-container'>
                {likedButtonReturn}
            </div>
            )
    }
  
};

export default withRouter(LikeButton)

