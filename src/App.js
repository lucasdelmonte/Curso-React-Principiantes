import React from 'react';
import './App.css';

// Componente con primer letra en mayusculas (buena practica)
function Helloworld(){
  return (
    <div>Hello World</div> 
  )
}

// Permite devolver 'que es' lo que queremos pintar por pantalla
function App() {
  return (
    <div>This is my component: <Helloworld/></div>
  );
}

export default App;
