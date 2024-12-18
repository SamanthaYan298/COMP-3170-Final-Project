import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Movies from './pages/movies';
import MovieInfo from './pages/movieInfo';
import HomePage from './pages/homepage';
import BottomNavigation from './components/BottomNavigation';
import Favourites from './pages/favourites';
import Profile from './pages/profile';

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

          {/* Favourites Page */}
          <Route path="/favourites" element={<Favourites />} />

          {/* Profile Page */}
          <Route path="/profile" element={<Profile />} /> 

        </Routes>

        {/* Optional: for quick navigation */}
        {/* <div className='link-layout'>
          <Link to="/movies" className='movie-page'>👉🏻 Movie Page</Link>
          <Link to="/movieInfo" className='movie-page'>👉🏻 Movie Info Page</Link>
        </div> */}

        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;
