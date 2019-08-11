import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import LikeButton from '../likes/like_button_container';
import Comments from '../comments/comment_container';

class KixShow extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
    };

    componentDidMount() {
        // debugger;
        // this.props.fetchLikes();
        // this.props.resetErrors();
        this.props.fetchPhoto(this.props.match.params.photoId);
    };

    componentDidUpdate(prevProps) {
        // debugger;
        // this.props.resetErrors();
        if (this.props.match.params.photoId !== prevProps.match.params.photoId) {
            this.props.fetchPhoto(this.props.match.params.photoId);
            // this.props.fetchLikes();
        }
    };
    
    render() {
        const kix = this.props.photo
        // let likesCount = 0;
        // debugger;
        if (!kix || !kix.like_ids) {
            return null;
        }
   
        // debugger;
        // kix.likes.forEach (like => {
        //     if (this.props.allLikes[like.id]) {
        //         likesCount ++
        //     }
        // })
        // debugger;
        let likesCount = kix.like_ids.length;
        // let likesCount = this.props.photoLikes.length;
        // let likesCountNotUsed = Object.values(this.props.allLikes).length;

        // if (this.state) {
        //     let cLike = this.props.createLike
        //     this.setState({liked: true})   
        // } else {
        //     rLike = this.props.removeLike
        //     this.setState({ liked: false })
        // }

        // let likeButton = <LikeButton 
        //     createLike={cLike} 
        //     removeLike={rLike} 
        //     currentUser={this.props.currentUser}
        //     photoId={kix.id} 
        // /> 

        let uploadedTime = kix.created_at
        uploadedTime = uploadedTime.split(':')[0].split('T')[0]

        return (
            <div className='kix-show-page-container'>
                <div className='kix-image-container'>
                    <Link to='/kix'><div className='discover-page-circle'>X</div></Link>
                    <img className='kix-photo'src={kix.image_url}/>
                </div>
                <div className='kix-photoinfo-and-comment-container'>
                    <div className='kix-photo-info-container'>
                        <h4 className='kix-photo-title'>{kix.title}</h4>
                        <h5 className='kix-photographer-name'>photo by: <Link to={`/users/${kix.photographer_id}`} >{kix.photographer}</Link></h5>
                        <div className='kix-photo-description'>{kix.description}</div>
                        <div className='kix-upload-time'>Uploaded: {uploadedTime}</div>
                    </div>
                    <div className='kix-likes-count-and-button-container'>
                        Likes: {likesCount}
                        <LikeButton />
                    </div>
                    <Comments />
                    {/* <div className='possible-footer'> oi. </div> */}
                </div>
            </div>
        );
    };
};

export default withRouter(KixShow);