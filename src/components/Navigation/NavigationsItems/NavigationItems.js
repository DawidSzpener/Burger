import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import Aux from '../../../hoc/Aux'

const navigationItems = (props) => (
  <Aux>
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      {props.isAuthenticated ? <NavigationItem link='/'>Orders</NavigationItem> : null}
    </ul>
  </Aux>
)

export default navigationItems
