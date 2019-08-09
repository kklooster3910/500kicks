import React from 'react';
import {withRouter} from 'react-router'
import KixIndexItem from '../kix/kix_index_item'

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { possibleBannerPhoto: undefined }
        this.possibleBannerPhoto = null;
        this.bannerImage = null;
    };

    componentDidMount() {
        // possibleBannerPhoto = undefined;
        this.props.fetchUser(this.props.match.params.userId)
        this.props.resetErrors();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId)
        };
    }

    render () {
        const cProfile = this.props.currentProfile
        // let possibleBannerPhoto = undefined;
        let kix;
        // let bannerImage;
        // debugger;
        if (!cProfile || !cProfile.photo_ids) {
            return null;
        }
        // debugger; 
        if (cProfile.photo_ids.length > 0) {
            kix = this.props.photos.map( photo => (
                <KixIndexItem key={photo.id} photo={photo} />
            ));
        } else {
            kix = <div></div>
        }
        // debugger;
        
        if ((this.props.photos.length > 0) && (!this.possibleBannerPhoto)) {
            this.possibleBannerPhoto = this.props.photos[Math.floor(Math.random() * this.props.photos.length)];
            this.bannerImage = <img className='profile-banner-image' src={this.possibleBannerPhoto.image_url}/>
        }
        console.log(this.bannerImage)
        return (
            <div className='users-profile-page-container'>
                <div className='profile-banner-image-container'>
                    {this.bannerImage}
                </div>
                <div className='profile-username-info-container'> 
                    <h4 className='profile-page-username'>{cProfile.username}</h4>
                    <div className='camera-info-container'>
                        <i className="fas fa-camera-retro camera"></i>
                        <div className='camera'>Nikon D850</div>
                        <div className='camera-info'>500mm ƒ/7.1 1/80s ISO 100</div>
                    </div>
                </div>
                <div className='profile-gallery'>
                    {kix}
                </div>

                <div className='maybe-footer'>oi.</div>
            </div>
        )
    }
};

export default withRouter(UserProfile)


