import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props);
        // debugger;
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => {
            this.setState({[field]: e.target.value}); 
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state)
            .then( () => this.props.history.push('/')); 
    };

    render () {
        return (
            <div className='session-form'>
                <h2>Sign Up</h2>
                <label>Username
                    <input type="text"
                    value={this.state.username} 
                    onChange={this.update('username')}/>
                </label>
                <label>Email
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')} />
                </label>
                <label>Password
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                </label>
                <button onClick={this.handleSubmit}>Sign Up!</button>
            </div>
        )
    };

};

export default Signup;