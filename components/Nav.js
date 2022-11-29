import Link from 'next/link'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import navStyles from '../styles/Nav.module.css'

const Nav = ({ children }) => {
    const { user, error, isLoading } = useUser();
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {user ? <li> <Link href="/outline">Outline</Link></li> : null}
                {user ? <li> <Link href="/membersonly">Members Only</Link></li> : null}
                {user ? <li > <Link href="/api/auth/logout"><span className={navStyles.colorRed}>logout</span></Link></li> : <li > <Link href="/api/auth/login"><span className={navStyles.colorGreen}>login</span></Link></li>}
                {/* 
                <li>
                    <Link href="/about">About</Link>
                </li> */}
            </ul>
        </nav>
    )
}
export default Nav