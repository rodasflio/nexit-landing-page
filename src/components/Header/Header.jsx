import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/NEXIT_WHITE.webp';
import Container from '../shared/Container/Container.jsx';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logoContainer}>
          <img src={logo} alt="NEXIT Logo" className={styles.logo} />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {/* Tradução dos links de navegação */}
            <li><a href="#home" className={styles.navLink}>Início</a></li>
            <li><a href="#works" className={styles.navLink}>Projetos</a></li>
            <li><a href="#blog" className={styles.navLink}>Blog</a></li>
            <li><a href="#timeline" className={styles.navLink}>Linha do Tempo</a></li>
            <li><a href="#pages" className={styles.navLink}>Todas as Páginas</a></li>
          </ul>
        </nav>
        {/* Tradução do botão */}
        <button className={styles.contactButton}>
          Fale Conosco
        </button>
      </Container>
    </header>
  );
};

export default Header;