import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'

class DropDown extends React.Component {
    constructor(props){
        super(props);
        this.state = { hidden: true };
        this.addHiddenClass = this.addHiddenClass.bind(this);
    }

    addHiddenClass() {
        this.setState({hidden: !this.state.hidden});
    }

    renderDropDown() {
        return (
            <ul className={(this.state.hidden ? 'drop-down hide' : 'drop-down') + ' drop-down-content'}>
                <p className='logged-in-title'>Logged in as:</p> 
                <p className='current-user'>{this.props.currentUser.username}</p>
                <Link to='/uploadphoto'><button className='upload-photo-nav-btn drop-down-item'>Upload Kix!</button></Link>
                <button className='loggedin-logout-btn drop-down-item' onClick={this.props.logout}>Logout</button>   
            </ul>
        )    
    }

    render () {  
        return (
            <div className='drop-down-btn-stuff' >
                <button onClick={this.addHiddenClass}><i className="far fa-user-circle"></i></button>
                {this.renderDropDown()}
            </div>
        )
    }
} 

const msp = state => ({
    currentUser: state.session.id
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(DropDown)