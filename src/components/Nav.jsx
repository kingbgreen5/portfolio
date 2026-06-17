// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';
// import Navbar from './UI/Navbar';

export default function Nav() {
  const currentPage = useLocation().pathname;
// The Navbar UI component will render each of the Link elements in the links prop

  return (
    <ul class="navbar"className="nav nav-tabs">

{/*       
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li> */}


      <li className="nav-item">
        <Link
          to="/portfolio"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
         Portfolio
        </Link>
      </li>


      <li className="nav-item">
        <Link
          to="/resume"

          className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>


      <li className="nav-item">
        <Link
          to="/contact"
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}