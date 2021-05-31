import React from 'react';
import { Home } from '../screens';
import { Route, Switch, Redirect } from "react-router-dom";

function Private() {

    const [logged, setLogged] = React.useState(true);

    return (
        <>
            {
                logged ?
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