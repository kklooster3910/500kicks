import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => ({
    loggedIn: Boolean(state.session.id)  // true or false depending on if we have a current user
});

//defining a functional component below
//takes a component, path we're looking for, and logged in(we're getting from msp)
// <AuthRoute path='' component={} />

//go back and watch the videos when you need to do protected routes, shouldn't be much setup here. 

const Protected =({ loggedIn, path, component: Component}) => (
    <Route 
        path={path}
        render={props => (loggedIn ? <Component {...props} /> : <Redirect to='/signup'/>)}
    />
);

const CommentProtected =({ loggedIn, component: Component}) => (
    <Route 
        render={props => (loggedIn ? <Component {...props} /> : <div/>)}
    />
);
 
const Auth = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => (loggedIn ? <Redirect to='/' /> : <Component {...props} />)}
    />
);

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected))
export const CommentProtectedRoute = withRouter(connect(msp)(CommentProtected))