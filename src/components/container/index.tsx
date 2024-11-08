import 'react';
import { Link } from 'react-router-dom';
import Livro from '../../models/book';

import './style.css';

interface ContainerProps {
  book: Livro;
}

function Container({ book }: ContainerProps) {
  return (
    <>
      <p className='title'>{book.title}</p>
      <p className='author'>{book.author}</p>
      <Link
        to={'/livro/' + book.id}
        state={ book }
      >
        <i className="bi bi-book"></i>
        <p>Abrir</p>
      </Link>
    </>
  )
}

export default Container;