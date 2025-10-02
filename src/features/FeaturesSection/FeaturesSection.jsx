import React from 'react';
import styles from './FeaturesSection.module.css';
import Container from '../../components/shared/Container/Container.jsx';
import FeatureCard from './FeatureCard.jsx';

// Tradução dos dados dos diferenciais
const features = [
  { icon: '⭐', title: 'Equipe Especializada', description: 'Profissionais dedicados com expertise em design e desenvolvimento web de ponta.' },
  { icon: '🤝', title: 'Foco no Cliente', description: 'Soluções sob medida para atender às suas necessidades únicas e superar expectativas.' },
  { icon: '🏆', title: 'Experiência Comprovada', description: 'Anos de sucesso entregando soluções web impactantes em diversas indústrias.' },
  { icon: '⏱️', title: 'Entrega Pontual', description: 'Cumprimos prazos de forma consistente, sem comprometer a qualidade ou a precisão.' },
  { icon: '📱', title: 'Soluções Responsivas', description: 'Garantimos desempenho perfeito em todos os dispositivos para a melhor experiência do usuário.' },
  { icon: '📢', title: 'Comunicação Transparente', description: 'Linhas de comunicação claras e abertas em todas as etapas do seu projeto.' },
];

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.cardsGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;