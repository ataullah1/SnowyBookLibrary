// Read data Localstore save
const getStoreDta = () => {
  const getdta = localStorage.getItem('read-book');
  if (getdta) {
    return JSON.parse(getdta);
  }
  return [];
};

const saveStoreDta = (id) => {
  const storeDta = getStoreDta();
  const exists = storeDta.find((dta) => dta === id);
  if (!exists) {
    storeDta.push(id);
    localStorage.setItem('read-book', JSON.stringify(storeDta));
  }
};

// Wishlist data localstore save
const getStoreDtaWishList = () => {
  const getdta = localStorage.getItem('wishlist-book');
  if (getdta) {
    return JSON.parse(getdta);
  }
  return [];
};

const saveStoreDtaWishList = (id) => {
  const storeDta = getStoreDtaWishList();
  const exists = storeDta.find((dta) => dta === id);
  if (!exists) {
    storeDta.push(id);
    localStorage.setItem('wishlist-book', JSON.stringify(storeDta));
  }
};




export { getStoreDta, saveStoreDta, getStoreDtaWishList, saveStoreDtaWishList };
