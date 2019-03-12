
import { connect } from 'react-redux';
import {
  buy,
  seeList,
  reset
} from '../actions/conuntActions';
import List from './List'

const mapstateToProps = (state) => {
  return {
    show: state.shop.show,
    prods: state.shop.prods
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleBuy: (prod) => {
      dispatch(buy(prod))
    },
    handleSeeList: () => {
      dispatch(seeList())
    },
    handleReset: () => {
      dispatch(reset())
    }
  }
}

export default connect(mapstateToProps, mapDispatchToProps)(List);