import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Movies from './pages/movies';


function App() {

  return (
    <>
      {/* App Home Page */}

      {/* End of Page */}

      {/* App Movies Page */}
      <div className='app-container'>
        
        <Router>
          <div className='app-container'>
            <Link to="/movies" className='movie-page'>Movie Page</Link>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
            </Routes>
          </div>
        </Router>
            
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
