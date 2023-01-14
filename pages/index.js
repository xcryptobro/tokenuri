import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Token URI</title>
        <meta name='description' content='Token metadata' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>tokenURI()</code>
          </p>
          <div>
            <a
              href='https://twitter.com/xCryptoBro'
              target='_blank'
              rel='noopener noreferrer'>
              By xCryptoBro
            </a>
          </div>
        </div>

        <div className={styles.center}></div>

        <div className={styles.grid}>
          <a
            href='/api/tt/1'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Tribal Tribute <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Metadata: <code className={styles.code}>/api/tt/123</code>
            </p>
          </a>

          <a
            href='/api/aa/123'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'>
            <h2 className={inter.className}>
              Anime Aztec Logo <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Metadata: <code className={styles.code}>/api/tt/123</code>
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
