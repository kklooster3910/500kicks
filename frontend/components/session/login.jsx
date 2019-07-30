import React from 'react';

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
            <div className='login-form'>
                <h2>Log Yourself In</h2>
                <label>Username
                            <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')} />
                </label>
                {/* <label>Email or email?
                            <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')} />
                </label> */}
                <label>Password
                            <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                </label>
                <button onClick={this.handleSubmit}>Log in!</button>
            </div>
        )
    }
}

export default Login