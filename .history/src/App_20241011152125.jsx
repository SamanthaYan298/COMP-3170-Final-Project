import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Movies from './pages/movies';
import MovieInfo from './pages/movieInfo';
import HomePage from './pages/homepage';
import BottomNavigation from './components/BottomNavigation';

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

          {/* Add other routes as needed for Account and Favourite pages */}
        </Routes>

        {/* Optional: for quick navigation (you can remove this if not needed) */}
        <div className='link-layout'>
          <Link to="/movies" className='movie-page'>👉🏻 Movie Page</Link>
          <Link to="/movieInfo" className='movie-page'>👉🏻 Movie Info Page</Link>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
      </Box>
    </Router>
  );
}

export default App;

        
       