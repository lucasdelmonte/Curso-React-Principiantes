import React from 'react';
import './App.css';

// Componente con primer letra en mayusculas (buena practica)
/* function Helloworld(props){
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div> 
  )
} */

class Helloworld extends React.Component{
  // Este objeto estado almacena datos de este componente Helloworld
  state = {
    show: true
  }
  
  // Metodo render que retorna elemento div y h3 junto con sus propiedades
  render(){
    if (this.state.show) {
      return (
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={() => alert('Welcome')}>Toggle Show</button>
        </div> 
      )
    } else {
      return <h1>There are not elements</h1>
    }
  }
}

// Permite devolver 'que es' lo que queremos pintar por pantalla
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hello Fazt" subtitle="loremp ipsum 1" /> 
      <Helloworld mytext="Hello Luke" subtitle="loremp ipsum 2" /> 
      <Helloworld mytext="Hello React" subtitle="loremp ipsum 3" /> 
    </div>
  );
}

export default App;
