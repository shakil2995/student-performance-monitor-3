import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (<>
        <Meta />
        <div><Nav /></div>
        {/* <div><Header /></div> */}
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <footer className={styles.footer}>&copy; 2022 all rights reserved</footer>
    </>
    )
}
export default Layout