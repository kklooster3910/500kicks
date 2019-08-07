import React from 'react';
import {withRouter} from 'react-router'
import KixIndexItem from '../kix/kix_index_item'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
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
        let kix;
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

        return (
            <div className='users-profile-page-container'>
                <div className='profile-banner-image-container'>
                    {/* <img className='profile-banner-image' src={Object.values(cProfile.photos).first.image_url}/> //figure out how to select a user image if they have a pic */}
                </div>
                <h4 className='profile-page-username'>{cProfile.username}</h4>
                maybe Camera Info?: 'camera info here'
                <div className='profile-gallery'>
                    {kix}
                </div>
            </div>
        )
    }
};

export default withRouter(UserProfile)


