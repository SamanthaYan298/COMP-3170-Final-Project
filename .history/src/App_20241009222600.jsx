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
      <Router>
        <Route path="/movies" element={<movies />} />
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
