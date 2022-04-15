import React, { useState } from 'react';
import LucesAutomaticas from './lucesAutomaticas.jsx';

function Luces() {
  const [luz, setLuz] = useState('red');
  const [luzAdicional, setLuzAdicional] = useState(0)

  function agregarLuz () {
    if (luzAdicional == 0){
      setLuzAdicional(1)
    } else {
      setLuzAdicional(0)
    }
    console.log(luzAdicional)
  }
  
  function cambioColor(){
    if (luz === 'red' && luzAdicional == 1){
      setLuz('blue')
    }
    else if (luz === 'red'){
      setLuz('green')
    }
    else if (luz === 'green') {
      setLuz('yellow')
    }
    else if(luz === 'yellow'){
      setLuz('red')
    }  
    else if(luz === 'blue') {
      setLuz('green')
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
      <div className='luz' >
        <div className='foco' id='green' onClick={()=>setLuz('green')} style={luz === 'green' ? {backgroundColor:'green', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
      </div>
      <div className='luz adicional' style={luzAdicional == 0 ? {visibility: 'hidden'} : null }>
        <div className='foco' id='green' onClick={()=>setLuz('blue')} style={luz === 'blue' ? {backgroundColor:'blue', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
      </div>
    </div>
    <button className='btn btn-warning' onClick={cambioColor}>Tambien puedes cambiar Color Aquí!</button>
    <button className='btn btn-info' onClick={agregarLuz} >{luzAdicional ? 'Elimine la' : 'Adicione una'} luz azul Aquí!</button>
    <LucesAutomaticas />
    </>
  );

}

export default Luces;