import React, { Component } from 'react';
import Card from './card';

const CardList = (props) => {
	return (
  <div>
  	{props.cards.map((card, index) => <Card {...card} key={index}/>)}
  </div>
  )
}

export default CardList