import React from 'react';
import { Login } from '../screens';
import { Route, Switch } from "react-router-dom";

function Public() {
    return (
        <Switch>
            <Route path="/login" component={Login}  />
        </Switch>
    );
}

export default Public;