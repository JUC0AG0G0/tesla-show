import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Tesla Light Show Editor"
      description="Orchestration de light shows pour flottes de véhicules"
    >
      <main className={styles.hero}>
        <div className={styles.container}>
          
          <h1 className={styles.title}>
            Tesla Light Show Editor
          </h1>

          <p className={styles.subtitle}>
            Crée, synchronise et déploie des light shows sur des flottes de véhicules en temps réel.
          </p>

          <div className={styles.buttons}>
            
            <Link className={styles.buttonPrimary} to="/docs/QUICKSTART">
              🚀 Démarrage rapide
            </Link>

            <Link className={styles.buttonSecondary} to="/docs/specs">
              📘 Spécifications
            </Link>

            <Link className={styles.buttonSecondary} to="/docs/ROADMAP">
              🗺️ Roadmap
            </Link>

          </div>

        </div>
      </main>
    </Layout>
  );
}