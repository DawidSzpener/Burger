import React from 'react'
import classes from './Form.css'
import Aux from '../../../hoc/Aux'

const form = (props) => {
  const inputClasses = [classes.InputElement]
  let inputElement = null

  if (props.invalid && props.touched) {
    inputClasses.push(classes.Invalid)
  }

  switch (props.elementType) { 
    case('input'):
      inputElement = <input
        className={inputClasses.join(' ')}
        onChange={props.changed} 
        {...props.elementConfig} value={props.value}/>
      break
    case('textarea'):
      inputElement = <textarea 
        className={inputClasses.join(' ')} 
        onChange={props.changed} 
        {...props.elementConfig} value={props.value}/>
      break
    case('select'):
      inputElement = 
      <Aux>
        <p>Chose Delivery Method</p>
        <select className={inputClasses.join(' ')} onChange={props.changed} {...props.elementConfig} value={props.value}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayedValue}
            </option>
          ))}
        </select>
      </Aux>
      break
    default:
      inputElement = <input className={inputClasses.join(' ')} onChange={props.changed} {...props}/>
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default form