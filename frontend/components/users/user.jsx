import React from 'react';
import {withRouter} from 'react-router'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        // debugger;
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(prevProps) {
        // debugger;
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId)
        };
    }

    render () {
        const cUser = this.props.user
        if (!cUser) {
            return null;
        }
        // debugger;
        return (
            <div>
                cUserId: {cUser.id + ' '}
                cUserUsername: {cUser.username + ' '}
                cUserEmail: {cUser.email + ' '}
            </div>
        )
    }
};

export default withRouter(UserProfile)


