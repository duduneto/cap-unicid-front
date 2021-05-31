import React from 'react';

function Login() {

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  function login() {
    fetch('http://localhost:3333/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailRef.current.value, password: passwordRef.current.value })
    })
    .then(response => response.json())
    .then(data => console.log('Login Response => ', data))
    .catch(error => console.log('Error Login => ', error))
  }

  console.log('Renderizando Form');

  return (
    <main className="login_container">
      <div className="title_login_container">
        <h3>Login</h3>
      </div>
      <div className="credentials_container">
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
      </div>
    </main>
  );
}

export default Login;