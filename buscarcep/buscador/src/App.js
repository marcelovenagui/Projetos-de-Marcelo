import { FiSearch } from 'react-icons/fi';
import './style.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text" 
        placeholder="Digite seu CEP..."
        />

        <button className="buttonsearch"><FiSearch size={25} color="white"/></button>
      </div>

      <mais className="main">
        <h2>CEP: 61624720</h2>

        <span>Rua um</span>
        <span>Complemento: Algum complemento</span>
        <span>Icaraí</span>
        <span>Caucaia, CE</span>
      </mais>
    </div>
  );
}

export default App;
