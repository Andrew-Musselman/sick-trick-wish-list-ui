import React from 'react';
import TrickCard from '../TrickCard/TrickCard'
import './Tricks.css';

const Tricks = ({ tricks }) => {
  const trickCards = tricks.map(trick => {
    return <TrickCard
      stance ={trick.stance}
      obstacle ={trick.obstacle}
      tutorial ={trick.tutorial}
      id ={trick.id}
      key ={trick.id}
  })
  return (
    <div className='tricks-container'>{trickCards}</div>
  )
}
