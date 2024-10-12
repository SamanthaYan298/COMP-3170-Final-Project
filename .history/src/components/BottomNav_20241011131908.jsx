import { Link } from 'react-router-dom';
import './BottomNav.css'; 

function BottomNav() {
  return (
    <div className="bottom-nav">
      <Link to="/movies" className="nav-link">Movies</Link>
      <Link to="/account" className="nav-link">Account</Link>
      <Link to="/favorites" className="nav-link">Favorites</Link>
    </div>
  );
}

export default BottomNav;