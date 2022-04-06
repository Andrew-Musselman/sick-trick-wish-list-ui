import React from 'react';
import TrickCard from '../TrickCard/TrickCard'
import './Tricks.css';

const Tricks = ({ tricks }) => {
  console.log(tricks)
  const trickCards = tricks.map(trick => {
    return <TrickCard
      stance ={trick.stance}
      name ={trick.name}
      obstacle ={trick.obstacle}
      tutorial ={trick.tutorial}
      id ={trick.id}
      key ={trick.id}
      />
  })
  return (
    <div className='tricks-container'>{trickCards}</div>
  )
}

export default Tricks;
