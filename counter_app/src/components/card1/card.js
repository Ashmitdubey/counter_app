import React from 'react'
import './card.css'
const PropTypes = require('prop-types');

const Card = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <h1>{props.title}</h1>
      <p>{props.describe}</p>
      <p>{props.name}</p>
      <p>{props.sec}</p>

    </div>
  )
}

export default Card 
Card.defaultProps = {
  bgColor: '#974141ff',
  title: 'Untitled',
  describe: '',
  name: '',
  sec: ''
};

Card.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  describe: PropTypes.string,
  name: PropTypes.string,
  sec: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};