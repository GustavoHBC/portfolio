import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Gustavo HBC</h1>
          <p className={styles.subtitle}>Portfolio WIP</p>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
