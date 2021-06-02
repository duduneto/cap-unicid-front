import React from 'react';
import { Home } from '../screens';
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

function Private() {
    const { token, user } = useSelector(state => state.auth);
    const history = useHistory();
    
    React.useEffect(() => {
        if(!token) {
            history.push('/login')
        }
    },[])
    return (
        <>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
            </Switch>
        </>
    );
}

export default Private;