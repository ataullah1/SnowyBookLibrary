import { Link } from 'react-router-dom';
import ErrorSvg from '../assets/error.svg';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#242424] flex items-center justify-center ">
      <Helmet>
        <title>Snowy Book | Error</title>
      </Helmet>
      <div className="w-11/12 mx-auto md:gap-16 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <img src={ErrorSvg} className="w-full" alt="" />
        </div>
        <div className="w-full md:w-1/2 text-white text-center md:text-left space-y-7">
          <h1 className="text-4xl pt-14 md:pt-0 font-bold">
            Something is not right...
          </h1>
          <p className="pb-9">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL.{' '}
          </p>
          <Link to={'/'}>
            <button className="border-2 border-green-600 hover:scale-105 px-8 py-2 rounded-md cursor-pointer active:scale-100 duration-200">
              Get back to home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
