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
          <Router className="movie-page-layout">
            <Routes>
            <Route path="/" element={
              <Link to="/movies" className='movie-page'>Movie Page</Link>
          } />

            <Route>
              <Route path="/movies" element={<Movies />} />
            </Route>
          </Routes>
          
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
