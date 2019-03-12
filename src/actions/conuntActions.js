export const BUY = 'BUY';
export const SEE_LIST = 'SEE_LIST';
export const RESET = 'RESET';

export const buy = (prod) => {
  return {
    type: BUY,
    prod
  }
}
export const seeList = () => {
  return {
    type: SEE_LIST
  }
}
export const reset = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: RESET })
    }, 1000)
  }
}