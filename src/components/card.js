import React from 'react'


const Card = (props) => {
	return (
  <div style={{padding: 20}}>
    <img src={props.avatar_url} style={{width: 75}}/>
    <div style={{fontWeight: '700'}}>{props.name}</div>
    <div>{props.company}</div>
  </div>
  )
}

export default Card