import { combineReducers } from 'redux';
import { BUY, SEE_LIST, RESET } from '../actions/conuntActions';

const iniData = {
  show: false,
  prods: []
}

const shop = (state = iniData, action) => {
  switch (action.type) {
    case BUY:
      return {
        ...state,
        prods: [...state.prods, action.prod]
      }
    case RESET:
      return {
        ...state,
        show: false,
        prods: []
      }
    case SEE_LIST:
      return {
        ...state,
        show: !state.show
      }
    default:
      return state
  }
}

const shopApp = combineReducers({ shop: shop })

export default shopApp;