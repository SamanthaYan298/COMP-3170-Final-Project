import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      {/* App Home Page */}

      {/* End of Page */}

      {/* App Movies Page */}
      <Router>
        <Route path="/mo" element={<MovieList />} />
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
