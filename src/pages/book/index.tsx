import 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Livro from '../../models/book';
import db from '../../db/db.json'; 

import './style.css';

function Book() {
  const location = useLocation();
  let book: Livro | undefined = location.state;
  console.log(book);

  // Se o book for undefined ou null, tenta buscar pelo id no JSON
  if (!book) {
    const bookId = location.pathname.split('/').pop();
    book = db.find(b => b.id.toString() === bookId);
  }

  return (
    <div className='book'>
      {book ? (
        <>
        <div className='object'>
          <h1 className='title'>{book.title}</h1>
          <p className='author'>{book.author}</p>
        </div>

        <div className="details">
          <h1 className='mobile-head'>{book.title}</h1>
          <p className='mobile-head'>{book.author}</p>

          <p className='pc-head'><strong>Sobre a obra</strong></p>

          <hr />
          
          <p>{book.description}</p>

          <hr />
          
          <p>Gênero: {book.genre}</p>
          <p>Ano: {book.year}</p>

          <hr />

          <iframe
            src={book.link}
            width={'100%'}
            height={'500px'}
            allow={'autoplay'}
          />
        </div>
        </>
      ):(
        <div>
          <p>Livro não encontrado.</p>
          <Link to="/">Voltar para início</Link>
        </div>
      )
      }
    </div>
  )
}

export default Book;