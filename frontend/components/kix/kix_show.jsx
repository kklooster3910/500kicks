import React from 'react';
import {withRouter} from 'react-router';

class KixShow extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
    };

    componentDidMount() {
        // debugger;
        this.props.fetchPhoto(this.props.match.params.photoId);
    };

    componentDidUpdate(prevProps) {
        // debugger;
        if (this.props.match.params.photoId !== prevProps.match.params.photoId) {
            this.props.fetchPhoto(this.props.match.params.photoId);
        };
    };
    
    render() {
        // debugger;
        let kix = this.props.photo
        if (!kix) {
            return null;
        }
        return (
            <div>
                photoId: {kix.id + ' '} 
                photo_title: {kix.title + ' '}
                photographer_id: {kix.photographer_id + ' '}
                <img src={kix.image_url}/>
            </div>
        );
    };
};

export default withRouter(KixShow);