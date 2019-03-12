import { combineReducers } from 'redux';
import { BUY, RESET } from '../actions/conuntActions';

const iniData = {
  price: 0
}

const shop = (state = iniData, action) => {
  switch (action.type) {
    case BUY:
      return {
        ...state,
        price: state.price + action.price
      }
    case RESET:
      return {
        ...state,
        price: 0
      }
    default:
      return state
  }
}

const shopApp = combineReducers({ shop: shop })

export default shopApp;