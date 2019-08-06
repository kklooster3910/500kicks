import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router' 

const Home = ({ demoUser, demoLogin, currentUser}) => {
    let maybeDemo;
    let maybeCreateNewUser;
    let kixShowLink;
    let uploadPhoto;
    
    const handleClick = (e) => {
        e.preventDefault();
        demoLogin(demoUser).then(alert('Demo User Logged In - try uploading a photo!'))
    }

    if (!currentUser) {
        maybeDemo = <button className='home-demo-btn' onClick={handleClick}>Demo Login!</button>
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

const msp = state => {
    // debugger;
    return ({
    demoUser: { username: 'Tyler Durden', email: 'fight@club.net', password: 'password123'},
    currentUser: state.session.id
})}

const mdp = dispatch => ({
    demoLogin: demoUser => (dispatch(login(demoUser))),
})

export default withRouter(connect(msp, mdp)(Home));