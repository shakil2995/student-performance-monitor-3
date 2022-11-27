import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div className={styles.container}>
      <Head>
        <title>Student Performence Monitor -3</title>
        <meta name="description" content="Student Performence Monitor -3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}