import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="my-0 md:mt-6">
      <div className="navbar flex items-center flex-col md:flex-row md:justify-between bg-base-100 bg-white">
        <div className="navbar-start flex items-center flex-row-reverse justify-between w-full md:w-auto md:flex-row">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 rotate-180 md:rotate-0 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 ml-[-140px] md:ml-0 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-white border-2 border-solid border-green-600 flex flex-col gap-2"
            >
              <NavLink
                to={'/'}
                className="font-medium text-base text-[#131313CC] hover:bg-slate-300 rounded-md px-4 py-1"
              >
                Home
              </NavLink>
              <NavLink
                to={'/listed-books'}
                className="font-medium text-base text-[#131313CC] hover:bg-slate-300 rounded-md px-4 py-1"
              >
                Listed Books
              </NavLink>
              <NavLink
                to={'pages-to-read'}
                className="font-medium text-base text-[#131313CC] hover:bg-slate-300 rounded-md px-4 py-1"
              >
                Pages to Read
              </NavLink>
              <NavLink
                to={'blog'}
                className="font-medium text-base text-[#131313CC] hover:bg-slate-300 rounded-md px-4 py-1"
              >
                Blog
              </NavLink>
              <NavLink
                to={'about-us'}
                className="font-medium text-base text-[#131313CC] hover:bg-slate-300 rounded-md px-4 py-1"
              >
                About Us
              </NavLink>

              <Link to={'login'}>
                <button className="btn bg-green-600 text-white border-2 border-green-600 hover:border-green-600 hover:bg-white hover:text-green-600 md:hidden text-base font-bold w-full ">
                  Sign In
                </button>
              </Link>
              <Link to={'sign-up'}>
                <button className="btn bg-[#59C6D2] border-2 border-[#59C6D2] hover:border-[#59C6D2] hover:bg-white hover:text-[#59C6D2] md:hidden text-base font-bold w-full text-white">
                  Sign Up
                </button>
              </Link>
            </ul>
          </div>
          <Link
            to={'/'}
            href="#"
            className="btn-ghost poppins text-3xl md:text-4xl font-bold px-0 hover:bg-white"
          >
            SnowyBook
          </Link>
        </div>
        <div className="navbar-center ">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base font-normal text-[#131313CC] mainmenu gap-1">
              <NavLink
                to={'/'}
                className="active:scale-90 duration-200 font-medium text-base text-[#131313CC] rounded-md px-4 py-1 border-2 border-[#fff0]"
              >
                Home
              </NavLink>
              <NavLink
                to={'listed-books'}
                className="active:scale-90 duration-200 font-medium text-base text-[#131313CC] rounded-md px-4 py-1 hover:text-green-600 border-2 border-[#fff0] hover:border-green-600 "
              >
                Listed Books
              </NavLink>
              <NavLink
                to={'pages-to-read'}
                className="active:scale-90 duration-200 font-medium text-base text-[#131313CC] rounded-md px-4 py-1 hover:text-green-600 border-2 border-[#fff0] hover:border-green-600 "
              >
                Pages to Read
              </NavLink>
              <NavLink
                to={'blog'}
                className="active:scale-90 duration-200 font-medium text-base text-[#131313CC]  rounded-md px-4 py-1 hover:text-green-600 border-2 border-[#fff0] hover:border-green-600 "
              >
                Blog
              </NavLink>
              <NavLink
                to={'about-us'}
                className="active:scale-90 duration-200 font-medium text-base text-[#131313CC] rounded-md px-4 py-1 hover:text-green-600 border-2 border-[#fff0] hover:border-green-600 "
              >
                About Us
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-3 w-[250px]">
            <NavLink
              to={'login'}
              className="py-2 text-center rounded-lg bg-green-600 border-2 border-green-600 hover:border-green-600 hover:bg-white hover:text-green-600 text-base font-bold w-full text-white active:scale-90 duration-200"
            >
              Sign In
            </NavLink>
            <NavLink
              to={'sign-up'}
              className="py-2 text-center rounded-lg bg-[#59C6D2] border-2 border-[#59C6D2] hover:border-[#59C6D2] hover:bg-white hover:text-[#59C6D2] text-base font-bold w-full text-white active:scale-90 duration-200"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
