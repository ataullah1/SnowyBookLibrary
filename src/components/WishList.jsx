import PropTypes from 'prop-types';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineDocumentChartBar } from 'react-icons/hi2';
import { GoPeople } from 'react-icons/go';
import { Link } from 'react-router-dom';
const WishList = ({ book }) => {
  const {
    image,
    yearOfPublishing,
    publisher,
    tags,
    category,
    totalPages,
    bookName,
    author,
    rating,
    bookId,
  } = book;
  return (
    <div className="w-full p-3 md:p-6 rounded-2xl border border-neutral-900 border-opacity-20 justify-start items-start gap-6 flex flex-col md:flex-row">
      <div className="min-w-[250px] sm:min-w-[320px] lg:min-w-[250px] lg:h-[270px] self-stretch bg-neutral-900 bg-opacity-5 p-3 md:p-7 rounded-2xl flex items-center justify-center max-w-[400px] max-h-[350px] md:max-h-max mx-auto px-20">
        {/* Img hobe akhane  */}
        <img src={image} alt="" className="lg:h-full" />
      </div>
      <div className="w-full flex-col justify-start items-start gap-4">
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <h1 className="text-neutral-900 text-2xl font-bold font-['Playfair Display']">
                {bookName}
              </h1>
              <div className="text-center text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">
                By : {author}
              </div>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row justify-start lg:items-center gap-4">
            <div className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">
              Tag
            </div>
            <div className="justify-start items-start gap-3 flex">
              {tags.map((dta, i) => (
                <div
                  key={i}
                  className="px-4 py-[7px] bg-green-600 bg-opacity-5 rounded-[30px] justify-center items-center gap-2.5 flex"
                >
                  <div className="text-center text-green-600 text-base font-medium font-['Work Sans']">
                    #{dta}
                  </div>
                </div>
              ))}
            </div>

            <div className="justify-start items-center gap-2 flex">
              <div className="text-center text-neutral-900 text-opacity-80 text-base font-normal font-['Work Sans'] flex items-center gap-3">
                <IoLocationOutline /> Year of Publishing: {yearOfPublishing}
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-center text-neutral-900 text-opacity-60 text-base font-normal font-['Work Sans'] flex items-center gap-3">
                <GoPeople /> Publisher: {publisher}
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="text-center text-neutral-900 text-opacity-60 text-base font-normal font-['Work Sans'] flex items-center gap-3">
                <HiOutlineDocumentChartBar /> Page: {totalPages}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full self-stretch h-[0px] border border-neutral-900 border-opacity-20 my-5"></div>

        <div className="justify-start items-start gap-3 flex flex-col lg:flex-row">
          <div className="px-5 py-[11px] w-full lg:w-auto bg-blue-500 bg-opacity-20 rounded-[30px] justify-center items-center gap-2.5 flex">
            <div className="text-center text-blue-500 text-base font-normal font-['Work Sans']">
              Category: {category}
            </div>
          </div>
          <div className="px-5 py-[11px] w-full lg:w-auto bg-amber-400 bg-opacity-20 rounded-[30px] justify-center items-center gap-2.5 flex">
            <div className="text-center text-amber-400 text-base font-normal font-['Work Sans']">
              Rating: {rating}
            </div>
          </div>
          <Link to={`book-details/${bookId}`}>
            <button className="px-5 py-2 w-full lg:w-auto bg-green-600 rounded-[30px] text-center text-white text-lg font-medium font-['Work Sans'] cursor-pointer active:scale-90 duration-150 border-2 border-green-600 hover:text-green-600 hover:bg-[#fff0]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

WishList.propTypes = {
  book: PropTypes.object,
};
export default WishList;
