import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationsItems/NavigationItems'

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div onClick={props.clicked}>MENU</div>
    <Logo height="80%"/>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar