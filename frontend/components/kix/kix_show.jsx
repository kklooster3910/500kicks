import React from 'react';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom'

class KixShow extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.photoId !== prevProps.match.params.photoId) {
            this.props.fetchPhoto(this.props.match.params.photoId);
        };
    };
    
    render() {
        const kix = this.props.photo
        if (!kix) {
            return null;
        }
        return (
            <div className='kix-show-page-container'>
                <div className='kix-image-container'>
                    <Link to='/kix'><div className='discover-page-circle'>X</div></Link>
                    <img className='kix-photo'src={kix.image_url}/>
                </div>
                <h4 className='kix-photo-title'>{kix.title}</h4>
                <h5 className='kix-photographer-name'>photo by: <Link to={`/users/${this.props.photo.photographer_id}`} >{kix.photographer}</Link></h5>
                <div className='possible-footer'> oi. </div>
            </div>
        );
    };
};

export default withRouter(KixShow);