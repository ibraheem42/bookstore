import Head from 'next/head';

import { Booklist } from '@/components/booklist';
import { AddBook } from '@/components/add-book';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bookstore</title>
        <meta
          name="description"
          content="A bookstore app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to the Bookstore</h1>
        <div className={styles['add-book-button']}>
          <AddBook />
        </div>
        <Booklist />
      </main>
    </>
  );
}
