const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST'
});

const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks
});

const booksError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error
});

export const bookAddedToCart = (bookId) => ({
  type: 'BOOK_ADDED_TO_CART',
  payload: bookId
});

export const bookRemovedFromCart = (bookId) => ({
  type: 'BOOK_REMOVED_FROM_CART',
  payload: bookId
});

export const allBooksRemovedFromCart = (bookId) => ({
  type: 'ALL_BOOKS_REMOVED_FROM_CART',
  payload: bookId
});

export const fetchBooksOld = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
}

export const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
}