import PropTypes from 'prop-types';
import Book from './Book';
const BooksSec = ({ books }) => {
  // console.log(books);
  return (
    <div>
      <h1 className="underline text-neutral-900 text-[40px] font-bold pt-12 lg:pt-16 pb-7 lg:pb-8 text-center">
        All Books
      </h1>

      {/* Books section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((dta) => (
          <Book key={dta.bookId} book={dta} />
        ))}
      </div>
    </div>
  );
};

BooksSec.propTypes = {
  books: PropTypes.array,
};
export default BooksSec;
