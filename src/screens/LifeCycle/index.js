import React from 'react';

// import { Container } from './styles';

function LifeCycle() {

    // React.useEffect(() => {
    //   console.log('Hallow')
    // },[])

    const [nome, setNome] = React.useState("Taking");

    function changeNome(newValue) {
        setNome(newValue);
    }

    console.log('Montando Componente')

    return (
        <div>
            <h1 >{nome}</h1>
            <button onClick={() => changeNome("Unicid")}>Muda Nome</button>

            {
                console.log('Montou o H1 e o Button')
            }
        </div>
    );
}

export default LifeCycle;