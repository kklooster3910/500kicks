import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import navBarContainer from './navbar/navbar_container';

const App = () => (
    <div>
        <Route path='/' component={navBarContainer} />
        <Switch>
            <Route path='/signup' component={SignupContainer}/>
            <Route path='/login' component={LoginContainer}/>
        </Switch>
    </div>
)

export default App;