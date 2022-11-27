import Link from 'next/link'

import navStyles from '../styles/Nav.module.css'

const Nav = ({ children }) => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                {/* <li>
                    <Link href="/registration">Registration</Link>
                </li> */}
                <li>
                    <Link href="/outline">Outline</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav