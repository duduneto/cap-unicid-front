import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Public from './public';
import Private from './private';
import { authenticate } from '../redux/features/auth'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Routes() {

    const dispatch = useDispatch(authenticate);
    const history = useHistory();

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        function unauth() {
            dispatch(authenticate({ user: null, token: null }));
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            if (history) {
                history.push('/login')
            }
        }
        console.log('token => ', token)
        if (token) {
            fetch('http://localhost:3333/user/validate_token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: token })
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.error) {
                        unauth();
                    } else {
                        dispatch(authenticate(data))
                    }
                })
                .catch(err => {
                    console.log(err);
                    unauth();
                })
        }
    }, []);

    console.log('Load all ROUTES')

    return (
        <Router>
            <Public></Public>
            <Private></Private>
        </Router>
    );
}

export default Routes;