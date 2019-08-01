import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router' 

const Home = ({ demoUser, demoLogin, currentUser}) => {
    let maybeDemo;
    let maybeCreateNewUser;
    let kixShowLink;
    
    const handleClick = (e) => {
        e.preventDefault();
        demoLogin(demoUser).then(alert('home boi logged'))
    }

    if (currentUser.id === null) {
        maybeDemo = <button className='home-demo-btn' onClick={handleClick}>Demo Login!</button>
        maybeCreateNewUser = <Link to='/signup'><button className='home-createnewuser-btn'>Create New User</button></Link>
    } else {
       maybeDemo = <button></button>
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
                    </div>
                    <h4 className='home-logo'>Share Your Kix...</h4>
                    <h4 className='home-logo-kick'>...Get Kicking</h4>
                </div>
            </div>
        </div>

    );
}

const msp = state => ({
    demoUser: { username: 'Tyler Durden', email: 'fight@club.net', password: 'password123'},
    currentUser: state.session
})

const mdp = dispatch => ({
    demoLogin: demoUser => (dispatch(login(demoUser))),
})

export default withRouter(connect(msp, mdp)(Home));