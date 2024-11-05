import 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
  return (
    <footer>
      <p>Desenvolvido por <Link to="https://github.com/gabriel-codart">@Gabriel-Codart</Link></p>
    </footer>
  )
}

export default Footer;