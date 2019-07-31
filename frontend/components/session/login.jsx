import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.userLogin(this.state)
            .then( () => this.props.history.push('/')
        );
    };

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        };
    };

   render() { 
        return (
            <div className='home-img-container'>
                <form className='loginform' onSubmit={this.handleSubmit}>
                    <div className='loginform-content-container'>
                        <h2 className='loginform-header'>Log Yourself In</h2>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')} 
                                placeholder='Username or Email'
                                className='loginform-input'/>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder='Password'
                                className='loginform-input'/>
                        <button className='loginform-submit' >Log in!</button>
                        <Link className='home-btn' to='/'>Home</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login