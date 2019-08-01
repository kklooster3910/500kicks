import React from 'react';
import { Link } from 'react-router-dom';

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
            .then( () => this.props.history.push('/') );
        const blankState = { username: '', email: '', password: '' };
        this.setState(blankState);
    };

    componentDidMount() {
        this.props.resetErrors();
    }

    render () {
        let errors = Object.values(this.props.errors)
        if (errors.length > 0) {
            errors = errors.map( (err, i) => (
                <li key={i}>{err}</li>
            ))
        }
        // debugger;
        return (
            <div>
                <div className='signup-home-img'></div>
                <form className='sessionform' onSubmit={this.handleSubmit}>
                    <div className='sessionform-content-container'>
                        <h2 className='sessionform-header'>Sign Up</h2>
                            <input type="text"
                                value={this.state.username} 
                                onChange={this.update('username')}
                                className='sessionform-input'
                                placeholder='Username'/>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')} 
                                className='sessionform-input'
                                placeholder='Email'/>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')} 
                                className='sessionform-input'
                                placeholder='Password'/>
                        <button className='sessionform-submit'>Sign Up!</button>
                        <Link to='/'><button onClick={() => this.props.resetErrors()} className='sessionform-home-btn'>Home</button></Link>
                        <p className='signupform-errors'>{errors}</p>
                    </div>
                </form>
            </div>
        )
    };

};

export default Signup;