import Nav from './Nav'
import Header from './Header'

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (<>
        <div><Nav /></div>
        <div><Header /></div>
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </>
    )
}
export default Layout