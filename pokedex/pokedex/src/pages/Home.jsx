import {Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard'
import { Container } from '@mui/system';
import axios from 'axios'


 const Home = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()
  })

      const getPokemons = () => {
            axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
            .then((res) => setPokemons(res.data.results))
            .catch((err) => console.log(err)) ;
  }

  
  return (
    <div>
      <Navbar />
      <Container maxWidth='xg'>
        <Grid container>
            {pokemons.map((pokemon, key) => (
              <Grid item xs={3} key={key}>
                <PokemonCard name={pokemon.name}/>
              </Grid>
            ))}
        </Grid>
      </Container>
      
      
    </div>
  )
}

export default Home
