
import Image from 'next/image'
import ArticleList from '../components/ArticleList'
import { useUser } from '@auth0/nextjs-auth0';
// import 'bootstrap/dist/css/bootstrap.css';
import BarChart from '../components/BarChart';
import RadarChart from '../components/RadarChart';
import PieChart from '../components/PieChart';
import PolarChart from '../components/PolarChart';
import styles from '../styles/Home.module.css'

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

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
        <h1>Welcome {user.nickname}!</h1>
        {/* <PieChart props={2022759} /> */}
        <div className={styles.Bcard}>Total Students : 120 </div>
        <div className={styles.Bcard}>Total Courses : 10 </div>
        <div className={styles.Bcard}>Total Faculties : 20 </div>
        <div className={styles.Bcard}>Total Departments : 5 </div>
        <div className={styles.charts}>
          <div className={styles.flex}>
            <RadarChart className={styles.flex} props={2022759} />
            <BarChart className={styles.flex} props={2022759} />
            <PieChart className={styles.flex} props={2022759} />
            <PolarChart className={styles.flex} props={2022759} />
          </div>

        </div>
      </div>
    )
  }





  else {
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