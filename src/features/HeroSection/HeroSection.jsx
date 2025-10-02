import React from 'react';
import styles from './HeroSection.module.css';
import Container from '../../components/shared/Container/Container.jsx';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          {/* Tradução do título principal */}
          <h1 className={styles.title}>
            Design Que Impulsiona o Crescimento Real do Negócio
          </h1>
          {/* Tradução da descrição */}
          <p className={styles.description}>
            Elevando marcas através de soluções web inovadoras e envolventes.
          </p>
          {/* Tradução do botão */}
          <button className={styles.ctaButton}>
            Obtenha Este Modelo
          </button>
        </div>
      </Container>
      <div className={styles.clients}>
        {/* Tradução do texto dos clientes */}
        <span className={styles.clientCount}>4.985 de 2.600 Clientes</span>
        <div className={styles.clientLogos}>
          {/* Ícones de clientes... */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;