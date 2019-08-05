import React from 'react';
import { withRouter } from 'react-router';
import KixIndexItem from './kix_index_item';
import { Link } from 'react-router-dom';
//going to need a container to do the work of dispatching
//my ajax request to the back end to fetch all the kix
//make sure you go back and fix your db/active record queries

class DiscoverKix extends React.Component {
    constructor(props) {
        super(props);
    };
    
    componentDidMount() {
        this.props.fetchPhotos();
    };
    
    render() {
        const kix = this.props.photos.map( photo => (
            <KixIndexItem key={photo.id} photo={photo} />
        ));
        return (
            <div className='discoverkix-gallery-container'>
                {kix}
            </div>
        );
    };
};

export default withRouter(DiscoverKix);