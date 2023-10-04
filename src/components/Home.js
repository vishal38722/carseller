import React from 'react'
import Cars from './Cars'
import Pagination from './Pagination'

const Home = ({searchQuery}) => {
  return (
    <div>
        <Cars searchQuery={searchQuery}/>
        {/* <Pagination/> */}
    </div>
  )
}

export default Home
