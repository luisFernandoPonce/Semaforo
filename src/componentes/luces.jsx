import React, { useState, useEffect } from 'react';
import LucesAdicionales from './lucesAdicionales';

function Luces() {
  const [luz, setLuz] = useState('red');
  
  function cambioColor(){
    if (luz == 'red'){
      setLuz('green')
    }
    else if (luz == 'green') {
      setLuz('yellow')
    } else {
      setLuz('red')
    }
  }
  return (
    <>
    <div className='semaforo'>
      <h1>Semaforo Táctil</h1>
      <div className='luz'>
        <div className='foco' id='red' onClick={()=>setLuz('red')}  style={luz === 'red' ? {backgroundColor:'red', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
      </div>
      <div className='luz'>
        <div className='foco' id='yellow' onClick={()=>setLuz('yellow')} style={luz === 'yellow' ? {backgroundColor:'yellow', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
      </div>
      <div className='luz'>
        <div className='foco' id='green' onClick={()=>setLuz('green')} style={luz === 'green' ? {backgroundColor:'green', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
      </div>
      <LucesAdicionales />
    </div>
    <btn className='btn btn-warning' onClick={cambioColor}>Tambien puede cambiar Color Aquí!</btn>
    </>
  );

}

export default Luces;