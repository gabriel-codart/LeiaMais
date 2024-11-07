import 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="">
            <img className="logo" src="/livro.png" alt="" width={"50rem"} />
            <p>Leia+</p>
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink to="/sobre">
            <p>Sobre</p>
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header;