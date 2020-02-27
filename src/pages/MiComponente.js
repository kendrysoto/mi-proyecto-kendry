import React from 'react';
import dibujo from '../images/dead-pool.jpg'


function MiComponente() {

    function sum(a, b) {
        return a + b;
      }
    
  return (
    <div>
        <p>este es mi componente creado por mi valga la redundancia</p>
        <img src={dibujo}></img>
        <p>la suma es: {sum(3, 4)} </p>
        <p>la suma es: {sum(4, 4)} </p>    
    </div>
  );
}

export default MiComponente;