import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import BooksSec from '../components/BooksSec';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const dta = useLoaderData();
  // console.log(dta);
  return (
    <div>
      <Helmet>
        <title>Snowy Book | Home</title>
      </Helmet>
      <Banner />
      <BooksSec books={dta} />
    </div>
  );
};

export default Home;
