import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router' 

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.currentUser);
        if (this.props.currentUser) {
            this.props.fetchUser(this.props.currentUser)
        }
    }
    
    handleClick (e) {
        e.preventDefault();
        this.props.demoLogin(this.props.demoUser).then(alert('Demo User Logged In - try uploading a photo!'))
    }

    render() {

        let maybeDemo;
        let maybeCreateNewUser;
        let kixShowLink;
        let uploadPhoto;
        
        if (!this.props.currentUser) {
            maybeDemo = <button className='home-demo-btn' onClick={this.handleClick}>Demo Login!</button>
            maybeCreateNewUser = <Link to='/signup'><button className='home-createnewuser-btn'>Create New User</button></Link>
        } else {
            uploadPhoto = <Link to='/uploadphoto'><button className='home-upload-photo-button'>Upload Kix</button></Link>
        }
        
        kixShowLink = <Link to='/kix'><button className='discover-kix-btn'>Discover Kix!</button></Link>

        return (     
            <div className='home'>
                <div className='home-img-container'>
                    <div className='home-interactive'>
                        <div>
                            {maybeDemo}
                            {maybeCreateNewUser}
                            {kixShowLink}
                            {uploadPhoto}
                        </div>
                        <h4 className='home-logo'>Share Your Kix...</h4>
                        <h4 className='home-logo-kick'>...Get Kicking</h4>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Home);
