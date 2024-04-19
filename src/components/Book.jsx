import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
  //   console.log(book);
  const { bookId, rating, tags, category, image, author, bookName } = book;
  return (
    // <Link></Link>
    <Link
      to={`book-details/${bookId}`}
      className=" p-3 pb-6 sm:p-6 rounded-2xl border border-neutral-900 border-opacity-20 flex-col justify-start items-start gap-6 inline-flex"
    >
      <div className="h-[230px] p-5 bg-zinc-100 rounded-2xl w-full">
        <img className="h-full rounded-2xl mx-auto " src={image} />
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-5 flex">
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="gap-3 justify-start items-start flex">
            {tags.map((dta, i) => (
              <div
                key={i}
                className="justify-start items-start gap-3 inline-flex"
              >
                <div className="px-4 py-[7px] bg-green-600 bg-opacity-5 rounded-[30px] justify-center items-center gap-2.5 flex">
                  <div className="text-center text-green-600 text-base font-medium">
                    {dta}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-col justify-start items-start flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <h2 className="text-neutral-900 text-2xl font-bold font-['Playfair Display']">
                {bookName}
              </h2>
              <div className="text-center text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">
                By : {author}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0px] border border-dashed border-neutral-900 border-opacity-20"></div>
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-center text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">
            {category}
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div className="text-center text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans'] flex items-center gap-2 justify-center">
              {rating} <FaRegStar />
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </Link>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
