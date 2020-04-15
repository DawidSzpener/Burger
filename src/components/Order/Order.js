import React from 'react'
import classes from './Order.css'

const order = (props) => {
  const ingredients = []

  return (
    <div className={classes.Order}>
      <p>Ingredients: salad (1)</p>
      <p>Price: <strong>{Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default order