import { IoIosArrowDown } from 'react-icons/io';
import ReadBooks from '../components/ReadBooks';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishlistBooks from '../components/WishlistBooks';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const booksDta = useLoaderData();

  const [sortby, setSort] = useState('');
  return (
    <div>
      <Helmet>
        <title>Snowy Book | Listed Books</title>
      </Helmet>
      <div>
        <p className=" bg-neutral-900 bg-opacity-5 rounded-2xl text-center text-neutral-900 text-[28px] font-bold font-['Work Sans'] py-8 px-3 mt-4">
          Listed All Books
        </p>
        <div className="mx-auto text-center py-7">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 py-2 bg-green-600 rounded-lg text-center text-white text-lg font-semibold font-['Work Sans'] w-52 hover:bg-white hover:text-green-600 border-2 border-green-600 hover:border-green-600"
            >
              Sort By <IoIosArrowDown className="ml-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-center"
            >
              <li
                onClick={() => setSort('rating')}
                className="py-1 mb-1 cursor-pointer hover:bg-white hover:text-green-600 border-2 border-[#fff0] hover:font-semibold hover:border-green-600 rounded-md"
              >
                Ratings
              </li>
              <li
                onClick={() => setSort('page')}
                className="py-1 mb-1 cursor-pointer hover:bg-white hover:text-green-600 border-2 border-[#fff0] hover:font-semibold hover:border-green-600 rounded-md"
              >
                Number of pages
              </li>
              <li
                onClick={() => setSort('year')}
                className="py-1 mb-1 cursor-pointer hover:bg-white hover:text-green-600 border-2 border-[#fff0] hover:font-semibold hover:border-green-600 rounded-md"
              >
                Publisher year
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <div className="mt-8">
          <TabPanel>
            <div>
              <ReadBooks dta={booksDta} sortby={sortby} />
            </div>
          </TabPanel>
          <TabPanel>
            <WishlistBooks dta={booksDta} sortby={sortby} />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
