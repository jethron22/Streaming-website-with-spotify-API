import React from 'react'
import { FaSearch } from 'react-icons/fa'; 

function Search() {
  return (
    <div className='rechercher'>
        <FaSearch/>
      <input className='SearchBar' type="search" placeholder='     Rechercher une musique' /> 
     </div>
  )
}

export default Search