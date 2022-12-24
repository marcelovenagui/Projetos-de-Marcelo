import { useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css'
import api from './services/Api';

function App() {

  const[input, setInput] = useState('')
  const[cep, setCep] = useState({});

 async function handleSearch() {
  //61624720/json/

    if (input === ''){
      alert('Preencha algum CEP')
      return;
  }

  try{
    const response = await api.get(`${input}/json`);
    setCep(response.data)

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


      {Object.keys(cep).length > 0 &&(
        <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>Complemento: {cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}
      
    </div>
  );
}

export default App;
