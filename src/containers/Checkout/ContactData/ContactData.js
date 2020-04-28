import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Form/Form'

class ContentData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: ''
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
      <Input inputtype='input' type="text" name="name" placeholder="Your name" changed={this.inputChanged}/>
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
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContentData