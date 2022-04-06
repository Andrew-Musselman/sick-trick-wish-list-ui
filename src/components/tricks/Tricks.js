import React from 'react';
import './Tricks.css';

const Tricks = ({ tricks }) => {
  const trickCards = tricks.map(trick => {
    <Trick
      stance ={trick.stance}
      obstacle ={trick.obstacle}
      tutorial ={trick.tutorial}
      id ={trick.id}
      key ={trick.id}
  })
  return (

  )
}
