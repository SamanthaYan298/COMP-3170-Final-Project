import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import movies from './pages/movies';


function App() {

  return (
    <>
      {/* App Home Page */}

      {/* End of Page */}

      {/* App Movies Page */}
      <div className='app-container'>
          <div className='top-nav'>
            <svg className='menu' width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 10.1667H30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 18.3333H30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h1>Home</h1>
            <svg className='search' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 23L30 30" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 14C2 20.6274 7.37258 26 14 26C17.3194 26 20.3242 24.6522 22.4966 22.474C24.6616 20.3034 26 17.308 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Router>
              <Routes>
                <Route path="/" element={<div>Home Page</div>} />
                <Route path="/movies" element={<movies />} />
              </Routes>
            </Router>
          </div>
        </div>
     

        {/* End of Page */}
        
        {/* App Account */}


        {/* End of Page */}

        {/* App Favourite */}

        {/* End of Page */}


    </>
  )
}

export default App
