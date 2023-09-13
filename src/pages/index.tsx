import Head from 'next/head';

import { APP_NAME } from '@/constants';
import { Booklist } from '@/components/booklist';
import { AddBook } from '@/components/add-book';

import styles from './styles.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
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
      <main className={styles['main']}>
        <h1>{`Welcome to the ${APP_NAME}`}</h1>
        <div className={styles['add-book-button']}>
          <AddBook />
        </div>
        <Booklist />
      </main>
    </>
  );
}
