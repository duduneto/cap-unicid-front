import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();

    function handleLogout() {
        history.push('/login')
    }

    return (
        <div>
            <h1>Home</h1>
            <br />
            <button onClick={handleLogout} >Sair</button>
        </div>
    );
}

export default Home;