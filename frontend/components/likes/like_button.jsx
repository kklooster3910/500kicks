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
            
            likedButton = <button onClick={() => alert('Please Login to Like a Photo')}>LIKE ME!</button>;
            
        } else {
            
            let that = this.props
            
            for (let i = 0; i < that.likesCount.length; i++) {               
                if (that.likesCount[i].photographer_id === that.currentUser) {
                    likedButton = <button onClick={() => that.removeLike(that.likesCount[i].id)}>LIKE ME!</button>;
                    break;
                } 
            }
    
            if (likedButton === undefined) {
                likedButton = <button onClick={() => this.props.createLike({photo_id: this.props.photo.id, photographer_id: this.props.currentUser})}>LIKE ME!</button>; 
            }
        } 

        return (
            <div className='like-button-container'>
                {likedButton}
            </div>
        )
    }
  
};

export default withRouter(LikeButton)

