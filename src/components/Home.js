import React from 'react'
import Cars from './Cars'

const Home = ({searchQuery}) => {
  return (
    <div>
        <Cars searchQuery={searchQuery}/>
    </div>
  )
}

export default Home
