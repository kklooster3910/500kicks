import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container'

const App = () => (
    <div>
        <h2>500kicks</h2>
        {/* <Switch>
            <Route exact path='/' component={splashComponent} />
        </Switch> */}
        <Route  path='/signup' component={SignupContainer}/>
    </div>
)

export default App;