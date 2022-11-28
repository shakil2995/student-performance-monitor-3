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
    </>
    )
}
export default Layout