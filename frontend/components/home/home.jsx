import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
// class Home extends React.Component {
//     constructor(props){
//         super(props);
//     };

const Home = ({ demoUser, demoLogin, currentUser}) => {
    let maybeDemo;
    let maybeCreateNewUser;
    if (currentUser.id === null) {
        maybeDemo = <button className='home-demo-btn' onClick={() => demoLogin(demoUser)}>Demo Login!</button>
        maybeCreateNewUser = <Link to='/signup'><button className='home-createnewuser-btn'>Create New User</button></Link>
    } else {
       maybeDemo = <button></button>
    }
    
    return (     
        <div className='home'>
            <div className='home-img-container'>
                <div className='home-interactive'>
                    <div>
                            {maybeDemo}
                            {maybeCreateNewUser}
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
    demoLogin: demoUser => dispatch(login(demoUser)),
})

export default connect(msp, mdp)(Home);