import React from 'react';
import { withRouter } from 'react-router';
import { fetchLikes } from '../../actions/like_actions';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: true };
    }
    
    render () {

        let likedButton; 
        
        if (!this.props.currentUser) {
            
            likedButton = <div className='kix-lik-btn' onClick={() => alert('Please Login to Like a Photo')}>Like!!</div>;
            
        } else {
            
            let that = this.props
            
            for (let i = 0; i < that.likesCount.length; i++) {               
                if (that.likesCount[i].photographer_id === that.currentUser) {
                    likedButton = <div className='kix-lik-btn' onClick={() => that.removeLike(that.likesCount[i].id)}>Like!!</div>;
                    break;
                } 
            }
    
            if (likedButton === undefined) {
                likedButton = <div className='kix-lik-btn' onClick={() => this.props.createLike({photo_id: this.props.photo.id, photographer_id: this.props.currentUser})}>Like!!</div>; 
            }
        } 

        return (
            <div className='kix-like-btn-container'>{likedButton}</div>
        )
    }
  
};

export default withRouter(LikeButton)

