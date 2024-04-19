import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer footer-center flex flex-col gap-10 p-10 pb-3 bg-gray-900 text-white rounded mt-10">
      <nav className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <Link to={'/'} className="link link-hover">
          Home
        </Link>
        <Link to={'/listed-books'} className="link link-hover">
          Listed Books
        </Link>
        <Link to={'/pages-to-read'} className="link link-hover">
          Pages to Read
        </Link>
        <Link to={'/blog'} className="link link-hover">
          Blog
        </Link>
        <Link to={'/about-us'} className="link link-hover">
          About us
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <a
            href="https://www.facebook.com/ataullah0"
            className="text-2xl hover:scale-125 duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com/dev_ataullah"
            className="text-2xl hover:scale-125 duration-200"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/ataullah1"
            className="text-2xl hover:scale-125 duration-200"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
      <aside>
        <p className="leading-7">
          Copyright © 2024 - All right reserved <br /> Developed by{' '}
          <a
            href="https://www.linkedin.com/in/md-ataullah/"
            className="text-pink-500 font-semibold italic link link-hover"
          >
            Md Ataullah
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
