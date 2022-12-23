import { useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css'
import api from './services/Api';

function App() {

  const[input, setInput] = useState('')

 async function handleSearch() {
  //61624720/json/

    if (input === ''){
      alert('Preencha algum CEP')
      return;
  }

  try{
    const response = await api.get(`${input}/json`);
    console.log(response.data)

  } catch{
    alert('Ops, erro ao buscar')
    setInput('')
  }
 
}
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
        type="text" 
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput (e.target.value)}
        />

        <button className="buttonsearch" onClick={handleSearch}><FiSearch size={25} color="white"/></button>
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
