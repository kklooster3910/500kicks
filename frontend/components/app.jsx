import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBar from './navbar/navbar';
import Home from './home/home';
import Kix from './kix/kix';

const App = () => (
    <div>
        <Route path='/' component={NavBar} />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/kix' component={Kix} />
            <AuthRoute path='/signup' component={SignupContainer}/>
            <AuthRoute path='/login' component={LoginContainer}/>
        </Switch>
    </div>
)

export default App;