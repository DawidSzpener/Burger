import React, { Component } from 'react'
import { connect } from 'react-redux'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actionTypes from '../../store/actions'

export class BurgerBuilder extends Component {

  state = {
    purchaseable: false,
    purchasing: false,
    loading: false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    })
    .reduce((sum,el) => {
      return sum + el
    }, 0)
    this.setState({ purchaseable: sum > 0})
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    const queryParams = []
    for (let i in this.props.ings) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]))
    }
    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  }

  render () {
    const disabledButton = {
      ...this.props.ings
    }
    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0
    }

    let burger = <Spinner />
    let orderSummary = null

    if (this.props.ings) {
      burger = 
      (<Aux>
          <Burger ingredients={this.props.ings}/>
          <BuildControls 
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledButton}
            price={this.props.price}
            purchaseable={this.state.purchaseable}
            order={this.purchaseHandler}
            />
      </Aux>)
      orderSummary = <OrderSummary
      price={this.props.price}
      ingredients={this.props.ings}
      cancel={this.purchaseCancelHandler}
      continue={this.purchaseContinueHandler}/>
    }
    

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)