import reducer from './reducer'
import * as actionTypes from './actions'

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    })
  })

  it('should add 1 to the ingredient count and increase the total price', () => {
    expect(reducer({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    }, { 
      type: actionTypes.ADD_INGREDIENT,
      ingredientName: 'salad' 
    })).toEqual({
      ingredients: {
        salad: 1,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4.5
    })
  })

  it('should deduct 1 from the ingredient count and decrese the total price', () => {
    expect(reducer({
      ingredients: {
        salad: 1,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4.5
    }, { 
      type: actionTypes.REMOVE_INGREDIENT,
      ingredientName: 'salad' 
    })).toEqual({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    })
  })
})