import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    update(field) {
        return e => {
            this.setState({[field]: e.target.value});
            this.props.resetErrors();
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

    handleClick (e) {
        e.preventDefault();
        this.props.demoLogin(this.props.demoUser)
        // .then(alert('Demo User Logged In - try uploading a photo!'))
    }

    render () {
        let errors = Object.values(this.props.errors)
        if (errors.length > 0) {
            errors = errors.map( (err, i) => (
                <li key={i}>{err}</li>
            ))
        }

        let demoLogin = <button className='signup-demo-btn' onClick={this.handleClick}>Demo Login!</button>

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
                            <input type="email"
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
                        {demoLogin}
                        <Link to='/'><button onClick={() => this.props.resetErrors()} className='sessionform-home-btn'>Home</button></Link>
                        <p className='signupform-errors'>{errors}</p>
                    </div>
                </form>
            </div>
        )
    };

};

export default withRouter(Signup);