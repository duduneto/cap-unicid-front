import React from 'react';

// import { Container } from './styles';

function SubHandle() {
    
    React.useEffect(() => {
        return () => console.log('Terminou de Montar')
    },[])
    
    console.log('Montando Component')
  return (
      <button className="counter_action_btn" > - </button>
  );
}

export default SubHandle;