import React from 'react'
import classes from './Form.css'
import Aux from '../../../hoc/Aux'

const form = (props) => {
  let inputElement = null

  switch (props.elementType) { 
    case('input'):
      inputElement = <input
        className={classes.InputElement}
        onChange={props.changed} 
        {...props.elementConfig} value={props.value}/>
      break
    case('textarea'):
      inputElement = <textarea 
        className={classes.InputElement} 
        onChange={props.changed} 
        {...props.elementConfig} value={props.value}/>
      break
    case('select'):
      inputElement = 
      <Aux>
        <p>Chose Delivery Method</p>
        <select className={classes.InputElement} onChange={props.changed} {...props.elementConfig} value={props.value}>
          <option key='Premium' value='Premium'>Premium</option>
          <option key='Standard' value='Standard'>Standard</option>
        </select>
      </Aux>
      break
    default:
      inputElement = <input className={classes.InputElement} onChange={props.changed} {...props}/>
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default form