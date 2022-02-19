import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import {Heading} from '@chakra-ui/react'

import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <Heading as="h2" variant="page-title">Gustavo HBC</Heading>
          <p className={styles.subtitle}>Portfolio WIP</p>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
