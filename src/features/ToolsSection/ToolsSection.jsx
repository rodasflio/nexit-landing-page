import React from 'react';
import styles from './ToolsSection.module.css';
import Container from '../../components/shared/Container/Container.jsx';
import ToolCard from './ToolCard.jsx';

// Tradução dos dados das ferramentas
const tools = [
  { icon: '🧩', title: 'Figurative', description: 'Ferramenta de design e prototipagem colaborativa online.' },
  { icon: '🎨', title: 'FrameX', description: 'Protótipos interativos para animações avançadas de sites.' },
  { icon: '🛒', title: 'Shopty', description: 'Plataforma de e-commerce para lojas online.' },
  { icon: '💡', title: 'Idease', description: 'Espaço de trabalho completo para anotações e tarefas de projeto.' },
  { icon: '🌐', title: 'Webflow', description: 'Crie e desenvolva sites visualmente com facilidade.' },
  { icon: '💳', title: 'Payflow', description: 'Plataforma de processamento de pagamentos online para empresas.' },
];

const ToolsSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          {/* Tradução do título e descrição */}
          <h2 className={styles.title}>Ferramentas Que Usamos para a Excelência</h2>
          <p className={styles.description}>Descubra as ferramentas e tecnologias avançadas que utilizamos para criar sites de ponta.</p>
        </div>
        <div className={styles.cardsGrid}>
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ToolsSection;