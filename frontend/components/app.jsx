import React from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBar from './navbar/navbar';
import HomeContainer from './home/home_conatiner';
import DiscoverKixContainer from './kix/kix_container';
import KixShowContainer from './kix/kix_show_container';
import UserProfileContainer from './users/user_container';
import PhotoFormUploadContainer from './photoform/photoupload_container';


const App = () => (
    <div>
        <Route path='/' component={NavBar} />
        <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/kix' component={DiscoverKixContainer} />
            <Route exact path='/kix/:photoId' component={KixShowContainer} />
            <Route exact path='/users/:userId' component={UserProfileContainer} />
            <AuthRoute path='/signup' component={SignupContainer}/>
            <AuthRoute path='/login' component={LoginContainer}/>
            <ProtectedRoute path='/uploadphoto' component={PhotoFormUploadContainer} /> 
        </Switch>
    </div>
)

export default withRouter(App);