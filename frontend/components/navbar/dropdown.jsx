import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';

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
        // debugger;
        return (
            <ul className={(this.state.hidden ? 'drop-down hide' : 'drop-down') + ' drop-down-content'}>
                <Link to={`/users/${this.props.currentUser}`}><button className='dropdown-profile-btn'>{this.props.users[this.props.currentUser].username}</button></Link>
                <Link to='/uploadphoto'><button className='upload-photo-nav-btn drop-down-item'>Upload Kix!</button></Link>
                <Link to='/kix'><button className='discover-kix-nav-btn drop-down-item'>Discover Kix</button></Link>
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

const msp = state => {
    // debugger;
    return ({
    currentUser: state.session.id,
    users: state.entities.users
})}

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(DropDown));