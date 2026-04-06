export const depositAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: "DEPOSIT" })
    }, 2000)
  }
}