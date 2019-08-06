import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import LikeButton from '../likes/like_button';

class KixShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchLikes();
        this.props.fetchPhoto(this.props.match.params.photoId);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.photoId !== prevProps.match.params.photoId) {
            this.props.fetchPhoto(this.props.match.params.photoId);
            this.props.fetchLikes();
        };
    };
    
    render() {
        const kix = this.props.photo    
        if (!kix) {
            return null;
        }

        let likesCount;
        // let like;

        if (kix.likes.length > 0) {
            likesCount = kix.likes.length;
            <div className='likes-count'>{likesCount}</div>
        } else {
            likesCount = <div className='likes-count'></div>
        }
    
        // if (this.props.allLikes[this.props.currentUser.id].photo_id === this.props.match.params.photoId) {
        //     { photo_id: this.props.match.params.photoId, photographer_id: this.props.currentUser.id }
        // }
    
        // if (this.props.allLikes[this.props.currentUser.id].photo_id !== this.props.match.params.photoid) {
        //     like = {photo_id: this.props.match.params.photoId, photographer_id: this.props.currentUser.id}
        // } else {
        //     like = this.props.allLikes[this.props.currentUser.id]
        // }

        let likeButton = <LikeButton 
            createLike={this.props.createLike}
            updateLike={this.props.removeLike} 
            currentUser={this.props.currentUser} 
        /> 
        
        return (
            <div className='kix-show-page-container'>
                <div className='kix-image-container'>
                    <Link to='/kix'><div className='discover-page-circle'>X</div></Link>
                    <img className='kix-photo'src={kix.image_url}/>
                </div>
                <h4 className='kix-photo-title'>{kix.title}</h4>
                <h5 className='kix-photographer-name'>photo by: <Link to={`/users/${this.props.photo.photographer_id}`} >{kix.photographer}</Link></h5>
                {likesCount}
                {likeButton}
                <div className='possible-footer'> oi. </div>
            </div>
        );
    };
};

export default withRouter(KixShow);