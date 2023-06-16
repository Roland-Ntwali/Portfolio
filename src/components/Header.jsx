import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contacts">Contact</Link>
    </nav>
    <h1>Ntwali Roland</h1>
    <p>I&apos;m a software developer passionate about creating amazing web applications.</p>
  </header>
);

export default Header;
