import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        if (this.props.currentUser) {
            this.state = { body: '', photograph_id: this.props.match.params.photoId, commentor_id: this.props.currentUser.id }
        } else {
            this.state = { body: '', photograph_id: this.props.match.params.photoId, commentor_id: null }
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        let blankState;
        this.props.currentUser ? blankState = { body: '', photograph_id: this.props.match.params.photoId, commentor_id: this.props.currentUser.id }
            : blankState = { body: '', photograph_id: this.props.match.params.photoId, commentor_id: null };
        this.setState(blankState);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea className='kix-comment-box' onChange={this.update('body')} value={this.state.body} cols='30' rows='10'></textarea>
                <button className='post-comment-btn'>Post Comment</button>
            </form>
        ) 
    }  
}

const msp = (state, ownProps) => ({
    photo: state.entities.photos[ownProps.match.params.photoId],
    currentUser: state.entities.users[state.session.id],
})

const mdp = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
})

export default withRouter(connect(msp, mdp)(CommentForm))