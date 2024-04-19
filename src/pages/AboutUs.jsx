import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
     <Helmet>
        <title>Snowy Book | About Us</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 underline">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Welcome to Snowy-Books, your premier online destination for all
            things literary. Dive into our extensive collection of books
            spanning diverse genres and discover your next great read. From
            classic literature to contemporary bestsellers, we have something
            for every reader. Join our vibrant community of book enthusiasts to
            share recommendations, engage in discussions, and explore the
            wonderful world of literature. Whether youre a seasoned bibliophile
            or just starting your reading journey, Snowy-Books is here to
            inspire and delight you. Start your adventure with us today and let
            the magic of storytelling unfold on every page.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg?w=900&t=st=1711569039~exp=1711569639~hmac=0e8f1f00a61e45d4622dd30d80c3140d155a0ead0d5f7928519e40a8bbef2355"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 underline">
            Our Writers
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Welcome to the Writers Corner at Snowy-Books! Meet talented authors
            from around the globe who bring their stories to life. Explore their
            biographies, discover their works, and delve into the creative
            process behind their masterpieces. From acclaimed novelists to
            emerging talents, our platform celebrates the diversity and richness
            of literary voices. Join us in honoring the artistry of writers and
            immerse yourself in a world of imagination and inspiration. Whether
            youre an aspiring author seeking guidance or a book lover eager to
            learn more about your favorite writers, Snowy-Books is your gateway
            to the captivating realm of storytelling.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://img.freepik.com/free-photo/portrait-thinking-young-readhead-man-white-shirt-sitting-wooden-table-with-pen-his-mouth_171337-9874.jpg?t=st=1711569448~exp=1711573048~hmac=8725454c29c838028e8b3d128f10e22199f66bcd21f0d9760792370c45205951&w=900"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://img.freepik.com/free-photo/portrait-thinking-young-readhead-man-white-shirt-sitting-wooden-table-with-pen-his-mouth_171337-9874.jpg?t=st=1711569448~exp=1711573048~hmac=8725454c29c838028e8b3d128f10e22199f66bcd21f0d9760792370c45205951&w=900"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alexa
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://img.freepik.com/free-photo/young-woman-writing-diary-restaurant_23-2147837516.jpg?t=st=1711569547~exp=1711573147~hmac=3ed1e2cedfdfae2e7f1f6b4d9c001246a336934568fc0f8168aad933d58c0f9a&w=900"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://img.freepik.com/free-photo/young-woman-writing-diary-restaurant_23-2147837516.jpg?t=st=1711569547~exp=1711573147~hmac=3ed1e2cedfdfae2e7f1f6b4d9c001246a336934568fc0f8168aad933d58c0f9a&w=900"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Olivia
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://img.freepik.com/free-photo/unhappy-young-woman-making-calculating-taking-notes_1262-15343.jpg?w=900&t=st=1711569601~exp=1711570201~hmac=1d960dceec7dc0ce7aee18ce31ce170b68de0f5b4c993797b986b6e99a0b6b8a"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://img.freepik.com/free-photo/unhappy-young-woman-making-calculating-taking-notes_1262-15343.jpg?w=900&t=st=1711569601~exp=1711570201~hmac=1d960dceec7dc0ce7aee18ce31ce170b68de0f5b4c993797b986b6e99a0b6b8a"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Liam
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://img.freepik.com/premium-photo/portrait-young-woman-sitting-table_1048944-30763095.jpg?w=900"
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://img.freepik.com/premium-photo/portrait-young-woman-sitting-table_1048944-30763095.jpg?w=900"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Elijah
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://media.istockphoto.com/id/1326638534/photo/beautiful-african-american-woman-holding-red-book-looking-at-window-and-smiling-university.jpg?s=612x612&w=0&k=20&c=dOopOrEfKZuzBW3--hW-e0DXhmaQBc5LSoZTOuRmqnc="
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://media.istockphoto.com/id/1326638534/photo/beautiful-african-american-woman-holding-red-book-looking-at-window-and-smiling-university.jpg?s=612x612&w=0&k=20&c=dOopOrEfKZuzBW3--hW-e0DXhmaQBc5LSoZTOuRmqnc="
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Morikulu
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://media.istockphoto.com/id/670540864/photo/afro-american-young-man-working-at-home-office.jpg?s=612x612&w=0&k=20&c=ef_A1zoGPN5EUWfCJnYp4cC0W0Byn4m8tAaz7R2hOnw="
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://media.istockphoto.com/id/670540864/photo/afro-american-young-man-working-at-home-office.jpg?s=612x612&w=0&k=20&c=ef_A1zoGPN5EUWfCJnYp4cC0W0Byn4m8tAaz7R2hOnw="
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Kukumia
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://media.istockphoto.com/id/1183295518/photo/portrait-of-cute-mixed-race-student-with-curly-hair-and-in-turtleneck-sitting-in-cafe-and.jpg?s=612x612&w=0&k=20&c=CGy888ICZhf_9MT1kAJck4KTROo0UyeTT9UJRIUybRY="
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://media.istockphoto.com/id/1183295518/photo/portrait-of-cute-mixed-race-student-with-curly-hair-and-in-turtleneck-sitting-in-cafe-and.jpg?s=612x612&w=0&k=20&c=CGy888ICZhf_9MT1kAJck4KTROo0UyeTT9UJRIUybRY="
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Sibanic
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM="
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM="
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Kurulica
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
