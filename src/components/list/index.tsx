import 'react';
import { useState } from 'react';
import Livro from '../../models/book';
import db from '../../db/db.json';

import './style.css';
import Container from '../container';

function List() {
  // Variável de Pesquisa
  const [searchInput, setSearchInput] = useState('');
  // Variáveis de Paginação
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBooks = db.filter((book: Livro) => 
    book.title.toLowerCase().includes(searchInput.toLowerCase()) || 
    book.author.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Calcula o total de páginas
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  // Calcula os índices para o slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  // Função para trocar de página
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className='list'>
      <input
      className='search' 
        type="text" 
        placeholder='Pesquisar...' 
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value)
          setCurrentPage(1);
        }}
      />

      <label className='items-per-page'>
        Itens por página:
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(parseInt(e.target.value));
            setCurrentPage(1); // Reseta para a primeira página ao alterar itens por página
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </label>

      <ul>
        {paginatedBooks.map((book: Livro) => (
          <li key={book.id} className='container'>
            <Container book={book} />
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>

        <span>Página {currentPage} de {totalPages}</span>

        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    </div>
  )
}

export default List;