
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div className={styles.container}>
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