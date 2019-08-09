import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
    };

    componentDidMount() {
        this.props.resetErrors();
    }

    handleSubmit(e) {
        // debugger;
        e.preventDefault();
        this.props.userLogin(this.state)
            .then( () => this.props.history.push('/')
        )
        const blankState = { username: '', password: ''};
        this.setState(blankState);
    };

    update(field) {
        return e => {
            this.setState({[field]: e.target.value});
            this.props.resetErrors();
        };
    };

   render() { 
       let errors = Object.values(this.props.errors)
       if (errors.length > 0) {
           errors = errors.map( (err, i) => (
               <li key={i}>{err}</li>
           ))
       }
        return (
            <div>
                <div className='login-home-img'></div>
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
                        <Link to='/'><button onClick={() => this.props.resetErrors()} className='loginform-home-btn'>Home</button></Link>
                        <p className='loginform-errors'>{errors}</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);