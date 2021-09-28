import React from 'react';
import './App.css';

// Componente con primer letra en mayusculas (buena practica)
function Helloworld(){
  return (
    <div id="hello">Hello World</div> 
  )
}

// Componente App mediante una arrow function
// const App = () => <div>This is my component: <Helloworld/> </div>

// Herencia desde React.Component a la clase App
class App extends React.Component{
  render(){
    return <div>This is my component: <Helloworld/> </div>
  }
}

// Permite devolver 'que es' lo que queremos pintar por pantalla
//function App() {
//  return (
//    <div>This is my component: <Helloworld/> </div>
//  );
//}

export default App;
