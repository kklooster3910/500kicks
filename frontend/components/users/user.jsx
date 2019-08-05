import React from 'react';
import {withRouter} from 'react-router'
import KixIndexItem from '../kix/kix_index_item'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId)
        };
    }

    render () {
        const cUser = this.props.user
        let kix;
        if (!cUser) {
            return null;
        }
        if (cUser.photos !== undefined) {
            kix = Object.values(cUser.photos).map( photo => (
                <KixIndexItem key={photo.id} photo={photo} />
            ));
        } else {
            kix = <div></div>
        }

  
        return (
            <div className='users-profile-page-container'>
                <div className='profile-banner-image-container'>
                    <img className='profile-banner-image' src={Object.values(cUser.photos)[1]}/>
                </div>
                <h4 className='profile-page-username'>{cUser.username}</h4>
                maybe Camera Info?: 'camera info here'
                <div className='profile-gallery'>
                    {kix}
                </div>
            </div>
        )
    }
};

export default withRouter(UserProfile)


