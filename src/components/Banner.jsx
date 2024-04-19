import { Link } from 'react-router-dom';
import BannerImg from '../assets/banner.png';
const Banner = () => {
  return (
    <div className="w-full mt-6 min-h-[554px] lg:min-h-[calc(100vh-120px)] bg-neutral-900 bg-opacity-5 rounded-3xl flex items-center justify-center lg:px-24">
      <div className="flex flex-col-reverse px-6 py-8 lg:flex-row justify-between items-center gap-8">
        {/* Left  */}
        <div className="w-full lg:w-3/5">
          <div className=" text-neutral-900 text-3xl lg:text-[56px] font-bold playfair leading-10 lg:leading-[84px] pb-12">
            Read books to refresh your mind
          </div>
          <Link to={'listed-books'}>
            <button className="btn px-7 w-full lg:w-auto py-2 border-2 border-green-600 lg:hover:translate-x-3 hover:bg-[#fff0] bg-green-600 hover:text-green-600 hover:border-green-600 rounded-lg text-center text-white text-xl font-bold">
              View The List
            </button>
          </Link>
        </div>
        {/* Right */}
        <div className="w-full lg:w-2/5 ">
          <img className="mx-auto lg:ml-auto" src={BannerImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
