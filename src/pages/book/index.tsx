import 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Livro from '../../models/book';
import db from '../../db/db.json'; 

import './style.css';

function Book() {
  const location = useLocation();
  let book: Livro = location.state;
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
        <h1>{book.title}</h1>

        <hr />
  
        <p>{book.description}</p>
  
        <hr />
  
        <p>Autor: {book.author}</p>
        <p>Gênero: {book.genre}</p>
        <p>Ano: {book.year}</p>
        
        <hr />
  
        <Link to={book.link}>Leia aqui</Link>
        </>
      ):(
        <p>Livro não encontrado.</p>
      )
      }
    </div>
  )
}

export default Book;