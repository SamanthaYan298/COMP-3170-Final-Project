import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Movies from './pages/movies';
import MovieInfo from './pages/movieInfo';
import HomePage from './pages/homepage';

function App() {

  return (
    <>
      {/* App Home Page */}
      <Router>
        <div className='app-container'>
          <Routes>
          
            <Route path="/" element={<HomePage />} />
          </Routes>
      </div>
      </Router>

      {/* End of Page */}

      {/* App Movies Page */} 
        <Router>
          <div className='app-container'>
            <Routes>
              <Route 
                path="/" 
                element={
                  <div className='link-layout'>
                    <Link to="/movies" className='movie-page'>👉🏻 Movie Page</Link>
                    <Link to="/movieInfo" className='movie-page'>👉🏻 Movie Info Page</Link>
                  </div>
                } 
              />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movieInfo" element={<MovieInfo />} />
            </Routes>
          </div>
        </Router>
     

        {/* End of Page */}
        
        {/* App Account */}


        {/* End of Page */}

        {/* App Favourite */}

        {/* End of Page */}


    </>
  )
}

export default App
