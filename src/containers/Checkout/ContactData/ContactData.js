import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Form/Form'

class ContentData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name',
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: ''
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP code',
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email',
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayedValue: 'fastest'},
            {value: 'cheapest', displayedValue: 'cheapest'}
          ]
        },
        value: ''
      },
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const burger = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      user: {
        name: 'some',
        email: 'some@some.com'
      },
    }
    axios.post('/burgers.json', burger)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  inputChanged = (event) => {
    console.log(event.target.value)


  }

  render () {
    let form = (
      <form>
      <Input elementType="" elementConfig="" value="" changed={this.inputChanged}/>
      <Input inputtype='input' type="email" name="email" placeholder="Your email" changed={this.inputChanged}/>
      <Input inputtype='input' type="text" name="street" placeholder="Your street" changed={this.inputChanged}/>
      <Input inputtype='input' type="text" name="postal" placeholder="Your postal code" changed={this.inputChanged}/>
      <Input inputtype='select' type="text" name="delivery" changed={this.inputChanged}/>
      <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>
    )

    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Fill in your contact details</h4>
        {form}
      </div>
    )
  }
}

export default ContentData