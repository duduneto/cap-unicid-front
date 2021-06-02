import React from 'react';
import { Home } from '../screens';
import { Route, Switch, Redirect } from "react-router-dom";

function Private() {
    const token = localStorage.getItem('token')
    console.log(token)
    return (
        <>
            {
                !!token ?
                    <Switch>
                        <Route path="/home" exact>
                            <Home />
                        </Route>
                    </Switch>
                    : <Redirect to="/login" />
            }
        </>
    );
}

export default Private;