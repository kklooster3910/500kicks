import React from 'react';
import {withRouter} from 'react-router';

class KixShow extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
    };

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId);
    };

    componentDidUpdate(prevProps) {
        // debugger;
        if (this.props.match.params.photoId !== prevProps.match.params.photoId) {
            this.props.fetchPhoto(this.props.match.params.photoId);
        };
    };
    
    render() {
        let kix = this.props.photo
        debugger;
        return (
            <div>
                {/* photoId: {kix.id + ' '}  */}
                photo_title: {kix.title + ' '}
                photographer_id: {kix.photographer_id + ' '}
            </div>
        );
    };
};

export default withRouter(KixShow);