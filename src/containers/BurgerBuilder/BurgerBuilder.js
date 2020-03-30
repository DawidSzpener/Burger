import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5, 
  meat: 0.9, 
  cheese: 0.3, 
  bacon: 0.7 
 }

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0
  }
  
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const newCount = oldCount + 1
    const newIngredients = {
      ...this.state.ingredients }
      newIngredients[type] = newCount
    
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({ totalPrice: newPrice, ingredients: newIngredients})
  }

  substractIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return
    }
    const newCount = oldCount - 1
    const newIngredients = {
      ...this.state.ingredients }
      newIngredients[type] = newCount
    
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction

    this.setState({ totalPrice: newPrice, ingredients: newIngredients})
  }

  render () {
    
    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients}/>
        </div>
        <div>
          <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.substractIngredientHandler}
            />
        </div>
      </Aux>
    )
  }
}

export default BurgerBuilder