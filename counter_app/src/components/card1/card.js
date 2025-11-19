import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div class="card">
      <h1>{props.title}</h1>
      <p>{props.describe}</p>

    </div>
  )
}

export default Card
