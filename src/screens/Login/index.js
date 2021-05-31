import React from 'react';
import { useHistory } from 'react-router-dom';
import { Loader } from '../../components'

function Login() {

  const history = useHistory();

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const [loading, setLoading] = React.useState(false);

  function login() {
    setLoading(true);
    fetch('http://localhost:3333/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login Success Response => ', data);
        if (!data.error) {
          history.push('/home')
        }
        setLoading(false);
      })
      .catch(error => {
        console.log('Error Login => ', error);
        setLoading(false);
      })
  }

  console.log('Renderizando Form');

  return (
    <main className="login_container">
      <div className="title_login_container">
        <h3>Login</h3>
      </div>
      <div className="credentials_container">
        {
          loading ?
            <Loader />
            :
            <>
              <div className="credential_block">
                <input ref={emailRef} placeholder={"e-mail"}
                ></input>
              </div>
              <div className="credential_block">
                <input ref={passwordRef} placeholder={"senha"} ></input>
              </div>
              <div className="credential_ctas">
                <button onClick={login}>Log-in</button>
              </div>
            </>
        }
      </div>
    </main>
  );
}

export default Login;