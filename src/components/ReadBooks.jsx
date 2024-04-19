import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getStoreDta } from '../utility/localStore';
import Readed from './Readed';
const ReadBooks = ({ dta, sortby }) => {
  const [red, setRed] = useState([]);
  useEffect(() => {
    const readStoreid = getStoreDta();
    const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
    setRed(readed);
  }, [dta]);
  useEffect(() => {
    if (sortby === 'rating') {
      const readStoreid = getStoreDta();
      const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
      readed.sort((a, b) => b.rating - a.rating);
      setRed(readed);
      // console.log('rating');
    } else if (sortby === 'page') {
      const readStoreid = getStoreDta();
      const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
      readed.sort((a, b) => b.totalPages - a.totalPages);
      setRed(readed);
      // console.log('pages');
    } else if (sortby === 'year') {
      const readStoreid = getStoreDta();
      const readed = dta.filter((dta) => readStoreid.includes(dta.bookId));
      readed.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setRed(readed);
      // console.log('year');
    }
  }, [dta, sortby]);

  return (
    <div className="flex flex-col gap-6">
      {red.map((dta) => (
        <Readed key={dta.bookId} book={dta} />
      ))}
    </div>
  );
};

ReadBooks.propTypes = {
  dta: PropTypes.array,
  sortby: PropTypes.string,
  // sortFunc: PropTypes.func,
};
export default ReadBooks;
