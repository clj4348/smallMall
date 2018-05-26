export default {
  changeCartCount(state, cartCount) {
    state.cartCount = cartCount
  },
  changeSelectAll(state, selectAll) {
    state.totalSelection = selectAll
  },
  changeTotalPrice(state, totalPrice) {
    state.totalPrice = totalPrice
  },
}