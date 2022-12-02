
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import { useUser } from '@auth0/nextjs-auth0';
import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  const { user, error, isLoading } = useUser();

  // console.log(articles)
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error.message}</h1>
  }
  if (user) {
    user ? console.log(user.nickname) : console.log('no user');
    return (
      <div className={styles.container}>
        {/* <ArticleList articles={articles} /> */}
        <h1>Welcome {user.nickname}!</h1>
        {/* <a href="/api/auth/logout">Logout</a> */}
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <h1>Welcome To SPMS !! Please Login/Signup to continue.</h1>
        <a href='http://localhost:3000/api/auth/login' className={styles.loginContainer}>Login</a>
        <a href='http://localhost:3000/api/auth/login' className={styles.signupContainer}>Signup</a>
      </div>
    )
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