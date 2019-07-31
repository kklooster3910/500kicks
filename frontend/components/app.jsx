import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import navBarContainer from './navbar/navbar_container';
import { AuthRoute } from '../util/route_util';
import Home from './home/home';

const App = () => (
    <div>
        <Route path='/' component={navBarContainer} />
        <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute path='/signup' component={SignupContainer}/>
            <AuthRoute path='/login' component={LoginContainer}/>
        </Switch>
    </div>
)

export default App;