const getReadListFromLS = () => {
  const readListInStr = localStorage.getItem("readList");
  if (readListInStr) {
    return JSON.parse(readListInStr);
  } else {
    return [];
  }
};

const setReadListInLS = (readList) => {
  const readListInStr = JSON.stringify(readList);
  localStorage.setItem("readList", readListInStr);
};

const updateReadListInLS = (bookId) => {
  const bookListArr = getReadListFromLS();
  bookListArr.push(bookId);
  setReadListInLS(bookListArr);
};

const getWishListFromLS = () => {
  const wishListInStr = localStorage.getItem("wishList");
  if (wishListInStr) {
    return JSON.parse(wishListInStr);
  } else {
    return [];
  }
};

const setWishListInLS = (wishList) => {
  const wishListInStr = JSON.stringify(wishList);
  localStorage.setItem("wishList", wishListInStr);
};

const updateWishListInLS = (bookId) => {
  const bookListArr = getWishListFromLS();
  bookListArr.push(bookId);
  setWishListInLS(bookListArr);
};

export {
  getReadListFromLS,
  setReadListInLS,
  updateReadListInLS,
  getWishListFromLS,
  setWishListInLS,
  updateWishListInLS,
};
