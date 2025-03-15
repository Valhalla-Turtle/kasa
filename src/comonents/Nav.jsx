import { Link } from 'react-router-dom';
import "../styles/nav.scss"

function Navigation() {
  return (
    <nav className='nav'>
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
    </nav>
  );
}

export default Navigation