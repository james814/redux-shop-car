export const BUY = 'BUY';
export const RESET = 'RESET';

export const buy = (price) => {
  return {
    type: BUY,
    price
  }
}

export const reset = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: RESET })
    }, 1000)
  }
}