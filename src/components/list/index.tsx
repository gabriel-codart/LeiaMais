import 'react';
import React, { useState } from 'react';
import Livro from '../../models/book';
import db from '../../db/db.json';

import './style.css';
import Container from '../container';

function List() {
  const [searchInput, setSearchInput] = useState('');

  const filteredBooks = db.filter((book: Livro) => 
    book.title.toLowerCase().includes(searchInput.toLowerCase()) || 
    book.author.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className='list'>
      <input
      className='search' 
        type="text" 
        placeholder='Pesquisar...' 
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <ul>
        {filteredBooks.map((book: Livro) => (
          <Container book={book} />
        ))}
      </ul>
    </div>
  )
}

export default List;