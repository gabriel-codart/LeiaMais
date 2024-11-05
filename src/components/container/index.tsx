import 'react';
import { Link } from 'react-router-dom';
import Livro from '../../models/book';

import './style.css';

interface ContainerProps {
  book: Livro;
}

function Container({ book }: ContainerProps) {
  return (
    <div className='container'>
      <p className='title'>{book.title}</p>
      <p>{book.author}</p>
      <Link
        to={'/livro/' + book.id}
        state={ book }
      >
        Abrir
      </Link>
    </div>
  )
}

export default Container;