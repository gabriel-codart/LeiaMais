import 'react';
import './style.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='about'>
      <h1>Sobre o Projeto</h1>
      <p>Este projeto é uma aplicação de listagem de livros, criada para oferecer uma interface intuitiva e prática para busca e visualização de obras literárias. A plataforma permite aos usuários pesquisarem por títulos e autores, com a opção de visualização direta de PDFs e links externos para leitura.</p>
      
      <h2>Propósito</h2>
      <p>O propósito deste projeto é facilitar o acesso à literatura, trazendo uma experiência organizada e acessível. Este projeto visa oferecer uma biblioteca digital simplificada e de fácil navegação.</p>

      <h2>Sobre o Desenvolvedor</h2>
      <p>Gabriel Oliveira, conhecido profissionalmente como <strong>Gabriel Codart</strong>, é desenvolvedor e entusiasta de tecnologia e design. Apaixonado por soluções digitais que melhoram a vida das pessoas, Gabriel se dedica a criar aplicações práticas e centradas no usuário.</p>
      
      <h2>Conecte-se</h2>
      <p>Confira mais projetos de Gabriel Codart em seu GitHub:</p>
      <Link to="https://github.com/gabriel-codart" target="_blank" rel="noopener noreferrer">
        github.com/gabriel-codart
      </Link>
    </div>
  );
}

export default About;