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
                {user ? (user.nickname == 'faculty' ? <li> <Link href="/outline">Course Outline</Link></li> : null) : null}
                {user ? (user.nickname == 'faculty' ? <li> <Link href="/questionbank">Question Bank</Link></li> : null) : null}
                {user ? <li> <Link href="/co">CO</Link></li> : null}
                {user ? <li> <Link href="/po">PO</Link></li> : null}
            </ul>
            <ul className={navStyles.rightAlign}>
                {user ? <li> <Link href={`/user/${user.nickname}`}>{user.nickname}</Link></li> : null}
                {user ? <li > <Link href="/api/auth/logout"><span className={navStyles.colorRed}>logout</span></Link></li> : <li > <Link href="/api/auth/login"><span className={navStyles.colorGreen}>login</span></Link></li>}
            </ul>
        </nav>
    )
}
export default Nav