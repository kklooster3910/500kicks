import React from 'react';
import { withRouter } from 'react-router'
//going to need a container to do the work of dispatching
//my ajax request to the back end to fetch all the kix
//make sure you go back and fix your db/active record queries

class Kix extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger;
        return (
            <div>
                <img src="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                <img src="https://images.unsplash.com/photo-1466229700857-454be534948a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"/>
                <img src="https://images.unsplash.com/photo-1469793600887-89239d821d02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                <img src="https://images.unsplash.com/uploads/1412198532414025532c0/6a31309c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"/>
                <img src="https://images.unsplash.com/photo-1455889267303-a5ec970d6d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"/>
            </div>
        )
    }
}

export default withRouter(Kix);