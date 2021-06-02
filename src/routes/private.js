import React from 'react';
import { Home } from '../screens';
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

function Private() {
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(token)
    return (
        <>
            {
                !!token && user ?
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