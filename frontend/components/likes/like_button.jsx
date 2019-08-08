import React from 'react';
import { withRouter } from 'react-router';
import { fetchLikes } from '../../actions/like_actions';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     // debugger;
    //     this.props.fetchLikes();
    // }

    // componentDidUpdate() {
    //     this.props.fetchLikes();
    // }
    
    render () {
        // const lEle = this.props.photoLikes.length - 1
        // debugger;
        // if (this.props.photoLikes[lEle] === undefined) {
        //    return null
        // }
        let likedButton; 
        // debugger;
        if (!this.props.currentUser) {
            
            likedButton = <button className='kix-like-btn' onClick={() => alert('Please Login to Like a Photo')}>Like!!</button>;
            
        } else {
            
            let that = this.props
            // debugger;
            for (let i = 0; i < that.photo.like_ids.length; i++) {  
                // debugger;             
                if (that.photoLikes[i].photographer_id === that.currentUser) {
                    likedButton = <button className='kix-like-btn' onClick={() => that.removeLike(that.photoLikes[i].id)}>Like!!</button>;
                    break;
                } 
            }
    
            if (likedButton === undefined) {
                likedButton = <button className='kix-like-btn' onClick={() => this.props.createLike({photo_id: this.props.photo.id, photographer_id: this.props.currentUser})}>Like!!</button>; 
            }
        } 
        // debugger;
        return (
            <div className='kix-like-btn-container'>{likedButton}</div>
        )
    }
  
};

export default withRouter(LikeButton)

