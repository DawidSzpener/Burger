import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios.get('/burgers.json') 
      .then(response => {
        const fetchedData = []
        for (let key in response.data) {
          fetchedData.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({ loading: false, orders: fetchedData })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  render () {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}/>
        ))}
      </div>
    )
  }
}

export default Orders