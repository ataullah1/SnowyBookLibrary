import { Helmet } from 'react-helmet-async';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Snowy Book | Blog</title>
      </Helmet>
      <div id="blog" className=" px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900 underline font-bold">
            Latest from our Blog
          </h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div>
                <img
                  className="w-full"
                  src="https://img.freepik.com/premium-photo/beautiful-young-girl-outdoor-cafe-reading-book-drinking-coffee-phone-student_372256-242.jpg?w=900"
                  alt="computer"
                />
                <div className="py-4 px-8 w-full flex justify-between bg-green-700">
                  <p className="text-sm text-white font-semibold tracking-wide">
                    Bruce Wayne
                  </p>
                  <p className="text-sm text-white font-semibold tracking-wide">
                    13TH Oct, 2020
                  </p>
                </div>
                <div className="bg-gray-100 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                  <h1 className="text-4xl text-gray-900 font-semibold tracking-wider underline">
                    Importance of reading books
                  </h1>
                  <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                    In a world brimming with distractions, Snowy-Books champions
                    the enduring significance of reading. Beyond mere
                    entertainment, books serve as portals to enlightenment,
                    empathy, and empowerment. They broaden perspectives, ignite
                    imaginations, and foster critical thinking. From classic
                    literature to contemporary gems, every book offers a unique
                    journey of discovery. At Snowy-Books, we recognize the
                    profound impact of reading on individual growth and societal
                    profound impact of reading on individual growth and societal
                    progress. Join us in celebrating the transformative power of
                    books as we embark on a quest for knowledge, enlightenment,
                    and enrichment. Lets turn the page together and unlock the
                    boundless potential of reading.
                  </p>
                  <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                    <p className="text-base tracking-wide text-green-700">
                      Read more
                    </p>
                    <svg
                      className="ml-3 lg:ml-6 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={18}
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                        stroke="#4338ca"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 8.53662H19"
                        stroke="#4338ca"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="h-5 w-2" />
                </div>
              </div>
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div>
                    <img
                      className="w-full"
                      src="https://img.freepik.com/free-photo/expressive-senior-female-posing-indoor_344912-1803.jpg?w=900&t=st=1711570456~exp=1711571056~hmac=49fdbd021a9f517846c8183aa7e28d0bc3a482204c6ecba3a6637dc4e004a5b4"
                      alt="games"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-green-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-gray-100 px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider underline">
                        what is the book
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base   pr-4 tracking-wide mt-2">
                        Books are more than just words on pages; theyre gateways
                        to imagination, knowledge, and understanding. At
                        Snowy-Books, we celebrate the magic of books and their
                        ability to transport us to new worlds. Explore with us.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-full"
                      src="https://img.freepik.com/free-photo/portrait-charming-woman-having-notepad-pen-hands-planning-expertising-analyzing-isolated_231208-10437.jpg?w=900&t=st=1711570488~exp=1711571088~hmac=ec99774788ba830de22dcd8bfbad2e0ddef248dbcd4426a621e31ed5478686be"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-green-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-gray-100 px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider underline">
                        Libery
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base   pr-4 tracking-wide mt-2">
                        At Snowy-Books, we celebrate the freedom found within
                        the pages of a book. Our library is a sanctuary where
                        minds roam free, exploring worlds, ideas, and emotions.
                        Join us in embracing the boundless liberty of reading.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                  <div>
                    <img
                      className="w-full"
                      src="https://img.freepik.com/free-photo/portrait-happy-smiling-beautiful-woman-office_496169-2924.jpg?w=900&t=st=1711570505~exp=1711571105~hmac=4b3dfc105795c6190af565285f7154d662719afb248ec19de09b612606bcff5b"
                      alt="laptop"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-green-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-gray-100 px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider underline">
                        Dreem Book
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base   pr-4 tracking-wide mt-2">
                        Escape reality and enter the enchanting world of dreams
                        with Snowy-Books. Dive into our collection of dreamy
                        reads, where imagination knows no bounds. Let your mind
                        wander and explore endless possibilities within the
                        pages of our dream books.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-full"
                      src="https://img.freepik.com/premium-photo/portrait-young-woman-sitting-table_1048944-30763095.jpg?w=900"
                      alt="worker"
                    />
                    <div className="py-2 px-4 w-full flex justify-between bg-green-700">
                      <p className="text-sm text-white font-semibold tracking-wide">
                        Bruce Wayne
                      </p>
                      <p className="text-sm text-white font-semibold tracking-wide">
                        13TH Oct, 2020
                      </p>
                    </div>
                    <div className="bg-gray-100 px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                      <h1 className="text-lg text-gray-900 font-semibold tracking-wider underline">
                        There is no end to learning
                      </h1>
                      <p className="text-gray-700 text-sm  lg:text-base  pr-4 tracking-wide mt-2">
                        At Snowy-Books, we believe in the endless journey of
                        learning through reading. With each book, you embark on
                        a new adventure, gaining knowledge, insight, and
                        inspiration. Explore the boundless world of learning
                        with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
