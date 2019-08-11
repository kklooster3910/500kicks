import React from 'react';
import { withRouter } from 'react-router';
import CommentForm from './comment_form';
import { CommentProtectedRoute } from '../../util/route_util';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        
        // debugger;
    
    };

    // handleSubmit(e) {

    // }

    render () {
        let comments = this.props.photoComments.map( comment => (
            <li key={comment.id} className='kix-single-comment'>{comment.body}</li>
        ))
        // let errors;
        // if ((this.props.errors.length > 0) && (typeof this.props.errors === 'array')) {
        //     errors = this.props.errors;
        // } 

        return (
            <div className='kix-comments-container'>
                {/* <div className='kix-comment-errors'>{errors}</div> */}
                <CommentProtectedRoute component={CommentForm} /> 
                {/* <CommentForm /> */}
                    Comments:
                    <ul className='kix-comments'>
                        {comments}
                    </ul>
            </div>
        )
    }

};

export default withRouter(Comments);