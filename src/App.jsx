import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import { Link } from 'react-router-dom';
import './App.scss';
import Logement from './pages/logement';

function Navigation() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/about">À propos</Link>
    </nav>
  );}
function App() {
  return (
    <Router>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path='/logement' element={<Logement />} />
      </Routes>
    </Router>
  );
}

export default App;
