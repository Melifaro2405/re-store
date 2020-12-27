import updateBookList from "./book-list";
import updateShoppingCart from "./shoping-cart";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;