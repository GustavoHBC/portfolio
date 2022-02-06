import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Gustavo HBC</title>
                <meta name="description" content="Gustavo Bedendo Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Gustavo HBC</h1>
                <p className={styles.subtitle}>Portfolio WIP</p>
            </main>
        </div>
    );
};

export default Home;
