import React from 'react'

import burgerLogo from '../../assets/images/original.png'
import classes from './Logo.css'

const logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burgeros" />
  </div>
)

export default logo