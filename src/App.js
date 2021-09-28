import React from 'react';
import './App.css';

// Componente con primer letra en mayusculas (buena practica)
function Helloworld(props){
  console.log(props);
  return (
    <div id="hello">{props.mytext}</div> 
  )
}


// Permite devolver 'que es' lo que queremos pintar por pantalla
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello Fazt" /> 
      <Helloworld mytext="Hello Luke" /> 
      <Helloworld mytext="Hello React" /> 
    </div>
  );
}

export default App;
