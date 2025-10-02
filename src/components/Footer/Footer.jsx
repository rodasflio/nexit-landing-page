import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/images/NEXIT_WHITE.webp';
import Container from '../shared/Container/Container.jsx';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="NEXIT Logo" className={styles.logo} />
            <h3 className={styles.companyName}>NEXIT</h3>
          </div>
          <p className={styles.copyright}>© 2023 NEXIT. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;