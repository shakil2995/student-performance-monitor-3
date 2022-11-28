
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import { useUser } from '@auth0/nextjs-auth0';
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  const { user, error, isLoading } = useUser();
  // console.log(user);
  // console.log(articles)
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }
  if (user) {
    return (
      <div className={styles.container}>
        {/* <ArticleList articles={articles} /> */}
        <h1>Welcome {user.name}!</h1>
        <a href="/api/auth/logout">Logout</a>
      </div>
    )
  } else {
    return (<a href='http://localhost:3000/api/auth/login'>Login</a>)
  }
}
  // export const getStaticProps = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  //   const articles = await res.json()

  //   return {
  //     props: {
  //       articles
  //     }
  //   }
  // }