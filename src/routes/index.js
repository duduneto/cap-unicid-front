import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Public from './public';
import Private from './private';

function Routes() {
    
    return (
        <Router>
                <Public></Public>
                <Private></Private>
        </Router>
    );
}

export default Routes;