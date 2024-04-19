import PropTypes from 'prop-types';
import WishList from './WishList';
import { useEffect, useState } from 'react';
import { getStoreDtaWishList } from '../utility/localStore';

const WishlistBooks = ({ dta, sortby }) => {
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    const readStoreid = getStoreDtaWishList();
    const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
    setWishList(readed);
  }, [dta]);

  useEffect(() => {
    if (sortby === 'rating') {
      const readStoreid = getStoreDtaWishList();
      const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
      readed.sort((a, b) => b.rating - a.rating);
      setWishList(readed);
      // console.log('rating');
    } else if (sortby === 'page') {
      const readStoreid = getStoreDtaWishList();
      const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
      readed.sort((a, b) => b.totalPages - a.totalPages);
      setWishList(readed);
      // console.log('pages');
    } else if (sortby === 'year') {
      const readStoreid = getStoreDtaWishList();
      const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
      readed.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setWishList(readed);
      // console.log('year');
    }
  }, [dta, sortby]);

  return (
    <div className="flex flex-col gap-6">
      {wishlist.map((dta) => (
        <WishList key={dta.bookId} book={dta} />
      ))}
    </div>
  );
};
WishlistBooks.propTypes = {
  dta: PropTypes.array,
  sortby: PropTypes.string,
};
export default WishlistBooks;
