import logo from '../logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="logoContainer">
        <img src={logo} alt="logo" className='logo'/>
      </div>
      <div className="linksContainer">
        <ul> 
          <li><a href="#" className="link">Home</a></li>
          <li><a href="#" className="link">About</a></li>
          <li><a href="#" className="link">Contact</a></li>
          <li><a href="#" className="link">Blog</a></li>
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;
