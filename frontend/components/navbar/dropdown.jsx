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
        // debugger;
        this.setState({hidden: !this.state.hidden});
    }

    // componentDidMount() {
    //     this.setState({hidden: false})
    // }

    renderDropDown() {
        return (
            <ul className={this.state.hidden ? 'drop-down hide' : 'drop-down' }>
                <p className='currentUser-banner'>Logged in as: {this.props.currentUser.username}</p>
                <button className='loggedin-logout-btn drop-down-item' onClick={this.props.logout}>Logout</button>   
            </ul>
        )    
    }

    render () {  
        return (
            <div >
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