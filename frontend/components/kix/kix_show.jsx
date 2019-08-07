import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import LikeButton from '../likes/like_button_container';

class KixShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        // this.props.fetchLikes();
        this.props.fetchPhoto(this.props.match.params.photoId);
    };

    componentDidUpdate(prevProps) {
        // debugger;

        if (this.props.match.params.photoId !== prevProps.match.params.photoId) {
            this.props.fetchPhoto(this.props.match.params.photoId);
            // this.props.fetchLikes();
        }
    };
    
    render() {
        const kix = this.props.photo
        // let likesCount = 0;
        if (!kix || !kix.likes) {
            return null;
        }
        // debugger;
        // kix.likes.forEach (like => {
        //     if (this.props.allLikes[like.id]) {
        //         likesCount ++
        //     }
        // })
        // let likesCount = kix.likes.length;
        let likesCount = this.props.photoLikes.length;
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

        let likeButton = <LikeButton likesCount={this.props.photoLikes}/>
        // debugger;    
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