import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
// class Home extends React.Component {
//     constructor(props){
//         super(props);
//     };

const Home = ({ demoUser, demoLogin, currentUser}) => {

    // const handleClick = (user) => {
    //     demoLogin(user)
    // } 

    let maybeDemo;
    if (currentUser.email === 'fight@club.net' && currentUser) {

    }

    return (     
        <div className='home'>
            <div className='home-img-container'>
                <div className='home-interactive'>
                        <div>
                            <button className='home-demo-btn' onClick={() => demoLogin(demoUser)}>Demo Login!</button>
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
    currentUser: state.session.id
})

const mdp = dispatch => ({
    demoLogin: demoUser => dispatch(login(demoUser)),
})

export default connect(msp, mdp)(Home);