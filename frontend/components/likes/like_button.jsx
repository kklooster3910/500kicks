import React from 'react';
import { withRouter } from 'react-router';
import { fetchLikes } from '../../actions/like_actions';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: true };

        // addHiddenClass() {
        //     this.setState({ hidden: !this.state.hidden });
        // }
        // this.state = { photo_id: undefined, photographer_id: undefined };
        // debugger;
        // if (this.props.currentUser.id) {
        //     this.state = { photo_id: this.props.photo.id, photographer_id: this.props.currentUser.id };
        // }
        // this.setState({ photo_id: this.props.photo.id, photographer_id: this.props.currentUser.id })
    }
    
    // componentDidMount() {
    //     this.props.fetchLikes()
    // }

    // componentDidUpdate(prevProps) {

    // }
    
    // if (this.state) {
    //     let cLike = this.props.createLike
    //     this.setState({liked: true})   
    // } else {
    //     rLike = this.props.removeLike
    //     this.setState({ liked: false })
    // }

    // let likeButton = <div
    //     createLike={cLike}
    //     removeLike={rLike}
    //     currentUser={this.props.currentUser}
    //     photoId={kix.id}
    // /> 
    render () {
        // if (!this.props.photo) {
        //     return null;
        // }

        // if (this.state === null) {
        //     this.setState({ photo_id: this.props.photoId, photographer_id: this.props.currentUser.id })
        // }  
        // this.setState({ photo_id: this.props.photo.id, photographer_id: this.props.currentUser.id })

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

