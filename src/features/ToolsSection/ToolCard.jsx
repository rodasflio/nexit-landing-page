import React from 'react';
import styles from './ToolCard.module.css';

const ToolCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        {/* Você pode substituir o ícone por uma imagem se preferir */}
        <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ToolCard;