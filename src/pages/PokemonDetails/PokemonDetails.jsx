import React from "react"
import './PokemonDetails.css'
import axios from 'axios'
import PropTypes from 'prop-types'

const PokemonDetails = ({ match }) =>{
  
  const [details, setDetails] = React.useState({})

  React.useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
    .then(({data})=>{
     setDetails({
              id: data.id,
              name: data.name,
              height: data.height,
              weight: data.weight,
              types: data.types,
            })
    })
  },[match.params.id])
  

  const colors = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '82351D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  }



  return(
    <div className="pokemon-details">
      <img className='pokemon-details__image' src ={details.id ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png` : `data:image/png;base64,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`} alt='poke' />
      <p className="pokemon-details__id">{ details && details.id }</p>
  <h1 className='pokemon-details__title'> { details && details.name }</h1>
      <ul className='pokemon-details__list'>

        {
          details.types &&
          details.types.map((item)=>{
          return <li className='pokemon-details__type' key={item.type.name} style={{ backgroundColor: `#${colors[item.type.name]}` }}>{ item.type.name }</li>
          })
        }
      </ul>
      <p className="pokemon-details__weight">Weight: { details && details.weight }</p>
      <p className="pokemon-details__height">Height: { details && details.height }</p>
    </div>
  )
}

PokemonDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}



export default PokemonDetails;