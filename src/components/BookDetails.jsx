import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getStoreDta,
  getStoreDtaWishList,
  saveStoreDta,
  saveStoreDtaWishList,
} from '../utility/localStore';
// import { useState } from 'react';

const BookDetails = () => {
  const dta = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  // console.log(id);
  const book = dta.find((dta) => dta.bookId === id);
  // console.log(book);
  const {
    image,
    yearOfPublishing,
    publisher,
    tags,
    category,
    totalPages,
    review,
    bookName,
    author,
    rating,
  } = book;
  // const [readed, setReaded] = useState([]);
  const handleRead = () => {
    const storeDta = getStoreDta();
    if (storeDta.includes(id)) {
      toast.warning('Sorry, You have already read this book.');
    } else {
      toast.success('You have successfully read the book.');
      saveStoreDta(id);
      // setReaded([...readed, id]);
      const getdtaWish = localStorage.getItem('wishlist-book');
      const getWishDta = JSON.parse(getdtaWish);
      // const res = getWishDta.filter((item) => !storeDta.includes(item));
      const res = getWishDta.filter((a) => storeDta.indexOf(a) < 0);
      localStorage.setItem('wishlist-book', JSON.stringify(res));
    }
  };
  // console.log(readed);
  const handleWishlist = () => {
    const storeDtaRead = getStoreDta();
    const storeDta = getStoreDtaWishList();
    if (storeDta.includes(id)) {
      toast.warning('Sorry, this book has already been added to the wishlist');
    } else if (storeDtaRead.includes(id)) {
      toast.warning(
        'Sorry, this book has already been read, so cannot add to wishlist.'
      );
    } else {
      toast.success('The book has been successfully added to the wishlist.');
      saveStoreDtaWishList(id);
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-14">
      <div className="max-h-[600px] bg-neutral-900 bg-opacity-5 rounded-2xl p-8 md:p-8 lg:p-16 flex justify-center items-center">
        <img className="h-full" src={image} />
      </div>
      <div className="flex flex-col gap-3 sm:gap-6">
        <h1 className="text-neutral-900 text-3xl sm:text-[40px] font-bold font-['Playfair Display']">
          {bookName}
        </h1>
        <div className="text-neutral-900 text-opacity-80 text-xl font-medium font-['Work Sans']">
          By : {author}
        </div>
        <div className="w-full h-[0px] border border-neutral-900 border-opacity-20"></div>
        <div className="text-neutral-900 text-opacity-80 text-xl font-medium font-['Work Sans']">
          {category}
        </div>
        <div className="w-full h-[0px] border border-neutral-900 border-opacity-20"></div>
        <div className="w-full">
          <span className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">
            Review: &nbsp;
          </span>
          <span className="text-neutral-900 text-opacity-70 text-base font-normal font-['Work Sans'] leading-relaxed">
            {review}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-neutral-900 text-base font-bold font-['Work Sans'] leading-relaxed">
            Tag:
          </p>
          <div className="flex gap-2">
            {tags.map((dta, i) => (
              <div
                key={i}
                className="h-[33px] px-4 py-[7px] bg-green-600 bg-opacity-5 rounded-[30px] justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-center text-green-600 text-base font-medium font-['Work Sans']">
                  #{dta}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[0px] border border-neutral-900 border-opacity-20"></div>
        <table className="w-full text-neutral-900 leading-relaxed font-['Work Sans']">
          <thead>
            <tr>
              <td className="w-1/2 md:w-1/3  text-opacity-70 text-base font-normal  ">
                Number of Pages:
              </td>
              <td className="w-1/2 md:w-8/12 text-base font-semibold ">
                {totalPages}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/2 md:w-1/3  text-opacity-70 text-base font-normal  ">
                Publisher:
              </td>
              <td className="w-1/2 md:w-8/12 text-base font-semibold ">
                {publisher}
              </td>
            </tr>
            <tr>
              <td className="w-1/2 md:w-1/3  text-opacity-70 text-base font-normal  ">
                Year of Publishing:
              </td>
              <td className="w-1/2 md:w-8/12 text-base font-semibold ">
                {yearOfPublishing}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="w-1/2 md:w-1/3  text-opacity-70 text-base font-normal  ">
                Rating:
              </td>
              <td className="w-1/2 md:w-8/12 text-base font-semibold ">
                {rating}
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex gap-5 mt-5">
          <button
            onClick={handleRead}
            className=" px-7 py-2 rounded-lg border border-neutral-900 border-opacity-30 text-center text-neutral-900 text-lg font-semibold font-['Work Sans']  cursor-pointer hover:scale-105 active:scale-90 duration-200"
          >
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="px-7 py-2 rounded-lg border border-teal-400 bg-teal-400 border-opacity-30 text-center text-white text-lg font-semibold font-['Work Sans']  cursor-pointer hover:scale-105 active:scale-90 duration-200"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
