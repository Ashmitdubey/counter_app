import React, { Children } from 'react'
import './card.css'
const PropTypes = require('prop-types');

const Card = (props) => {
  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
     {props.title && <h1>
        
         {props.title} </h1>}
      <p>{props.describe}</p>
      <p>{props.name}</p>
      <p>{props.sec && props.sec}</p>
      {/* {props.showCircle && (
      )} */}
      {props.children}
      {/* <div className='circle'></div> */}
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
  sec: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showCircle: PropTypes.boolean
};
