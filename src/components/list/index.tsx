import 'react';
import Livro from '../../models/book';
import db from '../../db/db.json';

import './style.css';
import Container from '../container';

function List() {
  return (
    <div className='list'>

      <ul>
        {db.map((book: Livro, index: number) => (
          <li key={index}>
            <Container book={book} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List;