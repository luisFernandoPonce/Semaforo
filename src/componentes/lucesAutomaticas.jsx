import React, { useState, useEffect } from 'react';

function LucesAutomaticas() {
  const [luz, setLuz] = useState('red');
  
  function cambioColor(){
    if (luz === 'red'){
      setLuz('green')
    }
    else if (luz === 'green') {
      setLuz('yellow')
    } else {
      setLuz('red')
    }
  }

  useEffect(()=> {
    var intervalo = setInterval(cambioColor, 2000)
    return () => clearInterval(intervalo);
    }, [luz])

  return (
    <>
    <div className='semaforo'>
      <h1>Semaforo Automático</h1>
      <div className='luz'>
        <div className='foco' id='red'  style={luz === 'red' ? {backgroundColor:'red', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
      </div>
      <div className='luz'>
        <div className='foco' id='yellow' style={luz === 'yellow' ? {backgroundColor:'yellow', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
      </div>
      <div className='luz'>
        <div className='foco' id='green' style={luz === 'green' ? {backgroundColor:'green', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
      </div>
      
    </div>
    
    </>
  );

}

export default LucesAutomaticas