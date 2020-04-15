import React from 'react'
import classes from './Form.css'
import Aux from '../../../hoc/Aux'

const form = (props) => {
  let inputElement = null

  switch (props.inputtype) {
    case('input'):
      inputElement = <input className={classes.InputElement} {...props}/>
      break
    case('textarea'):
      inputElement = <textarea className={classes.InputElement} {...props}/>
      break
    case('select'):
      inputElement = 
      <Aux>
        <p>Chose Delivery Method</p>
        <select className={classes.InputElement} {...props}>
          <option key='Premium' value='Premium'>Premium</option>
          <option key='Standard' value='Standard'>Standard</option>
        </select>
      </Aux>
      break
    default:
      inputElement = <input className={classes.InputElement} {...props}/>
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default form