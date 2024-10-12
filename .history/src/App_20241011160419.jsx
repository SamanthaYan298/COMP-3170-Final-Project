import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Movies from './pages/movies';
import MovieInfo from './pages/movieInfo';
import HomePage from './pages/homepage';
import BottomNavigation from './components/BottomNavigation';

function App() {
  return (
    <Router>
      <div className="app-container flex flex-col h-screen">
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

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;

       