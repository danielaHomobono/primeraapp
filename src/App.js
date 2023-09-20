import logo from './logo.svg';
import './App.css';
import boostrap from 'boostrap';
import Usuario from './componentes/usuario';


function App() {
  return (
    <div className="App">
     <usuario nombre="maria" cargo="gerente" conoceme="cv"/> 
    </div>    
  );
}

export default App;
