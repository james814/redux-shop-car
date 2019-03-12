
import { connect } from 'react-redux';
import {
  buy,
  reset
} from '../actions/conuntActions';
import List from './List'

const mapstateToProps = (state) => {
  return {
    price: state.shop.price
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleBuy: (price) => {
      dispatch(buy(price))
    },
    handleReset: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapstateToProps, mapDispatchToProps)(List);