import React from 'react';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-teal-500 to-blue-500 text-white shadow-lg z-50">
      <div className="flex justify-around items-center h-16"> {/* Adjusted height */}
        {/* Home Button */}
        <Link to="/" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6" // Adjust size if needed
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7m-9-5v18"
            />
          </svg>
          <span>Home</span>
        </Link>

        {/* Favourites Button */}
        <Link to="/favorites" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Favorites</span>
        </Link>

        {/* Search Button */}
        <Link to="/movies" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4a4 4 0 014 4v1h2v-1a6 6 0 00-12 0v1h2v-1a4 4 0 014-4z"
            />
          </svg>
          <span>Search</span>
        </Link>

        {/* Profile Button */}
        <Link to="/profile" className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A10.001 10.001 0 0112 4a10.001 10.001 0 016.879 13.804m-6.879-9.804v4m0 4h.01"
            />
          </svg>
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <header className="bg-teal-400">
        <nav className="flex justify-between w-full bg-purple-500 text-white p-4">
          <a href="#"><span className="font-semibold text-xl tracking-tight">Title</span></a>
          <div className="md:items-center md:w-auto flex">
            <div className="md:flex hidden">
              <Link className="block md:text-white mr-4" to="#">Link 1</Link>
              <Link className="block md:text-white mr-4" to="#">Link 2</Link>
              <Link className="block md:text-white mr-4" to="#">Link 3</Link>
              <Link className="block md:text-white mr-4" to="#">Link 4</Link>
            </div>
            <div className="flex text-sm">
              <Link className="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" to="#">Login</Link>
              <Link className="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" to="#">Sign up</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex justify-center items-center">
        <h1 className="text-3xl text-center">Welcome</h1>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default App;
