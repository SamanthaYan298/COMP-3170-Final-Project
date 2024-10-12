import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css';
import Movies from './pages/movies';
import MovieInfo from './pages/movieInfo';
import HomePage from './pages/homepage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* Define Routes */}
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* Movies Page */}
          <Route path="/movies" element={<Movies />} />

          {/* Movie Info Page */}
          <Route path="/movieInfo" element={<MovieInfo />} />

           {/* App Account */}


        {/* End of Page */}

        {/* App Favourite */}

        {/* End of Page */}

        </Routes>

        <div className='link-layout'>
          <Link to="/movies" className='movie-page'>👉🏻 Movie Page</Link>
          <Link to="/movieInfo" className='movie-page'>👉🏻 Movie Info Page</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;




        
       