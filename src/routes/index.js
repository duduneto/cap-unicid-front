import React from 'react';
import Public from './public';
import Private from './private';
import { authenticate } from '../redux/features/auth'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Routes() {
    const history = useHistory();

    const token = useSelector(state => state.auth.token)

    const dispatch = useDispatch(authenticate);

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

    React.useEffect(() => {
        if (token) {
            history.push('/home')
        }
    }, [token])


    return (
        <>
            <Public></Public>
            <Private></Private>
        </>
    );
}

export default Routes;