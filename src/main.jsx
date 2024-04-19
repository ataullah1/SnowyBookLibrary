import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import BookDetails from './components/BookDetails';
import PagesToRead from './pages/PagesToRead';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/books.json'),
      },
      {
        path: 'listed-books',
        element: <ListedBooks />,
        loader: () => fetch('/books.json'),
      },
      {
        path: 'book-details/:bookId',
        element: <BookDetails />,
        loader: () => fetch('/books.json'),
      },
      {
        path: 'pages-to-read',
        element: <PagesToRead />,
        loader: () => fetch('/books.json'),
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'listed-books/book-details/:bookId',
        element: <BookDetails />,
        loader: () => fetch('/books.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
