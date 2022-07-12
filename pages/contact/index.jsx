import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../../components/NavBar";
import styles from "../../styles/Home.module.css";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Erick Hernández</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <h1>Contact Page</h1>
        <h1 className={styles.title}>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={styles.description}>
          ESTAMOS EN CONTACT
          <code className={styles.code}>pages/contact.js</code>
        </p>
      </main>
    </div>
  );
}
