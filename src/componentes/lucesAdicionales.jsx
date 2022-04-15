import React from 'react';

function LucesAdicionales () {
  
  return (
    <div className='luz'>
      <div className='foco' id='green' onClick={()=>setLuz('green')} style={luz === 'green' ? {backgroundColor:'green', boxShadow: '0px 2px 10px 10px white'} : null } ></div>
    </div>
  );
}

export default LucesAdicionales