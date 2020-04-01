import React from 'react'

import burgerLogo from '../../assets/images/original.png'
import classes from './Logo.css'

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="Burgeros" />
  </div>
)

export default logo