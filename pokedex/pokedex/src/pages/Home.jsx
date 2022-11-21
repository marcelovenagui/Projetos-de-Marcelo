import {Grid} from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard'
import { Container } from '@mui/system';
import axios from 'axios'


const Home = () => {
  axios.get('https://pokeapi.co/api/v2/')
  return (
    <div>
      <Navbar />
      <Container maxWidth='xg'>
        <Grid container>
            <Grid item xs={3}>
                <PokemonCard />
            </Grid>
            <Grid item xs={3}>
                <PokemonCard />
            </Grid>
            <Grid item xs={3}>
                <PokemonCard />
            </Grid>
            <Grid item xs={3}>
                <PokemonCard />
            </Grid>
        </Grid>
      </Container>
      
      
    </div>
  )
}

export default Home
