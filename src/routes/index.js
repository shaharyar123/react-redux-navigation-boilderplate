import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import React from 'react';

// import { Switch, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Route from './Route';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={props => <SignIn {...props} />} />
            <Route path="/register" component={props => <SignUp {...props} />} />
            <Route path="/dashboard" component={props => <Dashboard {...props} />} isPrivate />
            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={props => <SignIn {...props} />} />
        </Switch>
    );
}
