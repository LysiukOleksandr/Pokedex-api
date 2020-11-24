import React from 'react'
import PokemonList from '../components/PokemonList/PokemonList'
import Filter from '../components/Filter/Filter'
import Pagination from '../components/Pagination/Pagination'
import store from '../store/store'
import {observer} from 'mobx-react-lite'
const Home = observer(() =>{

    React.useEffect(()=>{
      let mounted = true;
      if(mounted){
      store.fetchPokemons()
      store.fetchPokemonsTypes()
      }
      return () => mounted = false
    }, [])


  return(
    <div>
      <Filter />
      <PokemonList pokemons={store.pokemons}/>
      <Pagination />
    </div>
  )
})


export default Home;