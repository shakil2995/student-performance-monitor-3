import Link from 'next/link'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.css'

const Nav = ({ children }) => {
    const { user, error, isLoading } = useUser();
    const router = useRouter();
    // console.log(router.pathname);
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link className={router.pathname == "/" ? navStyles.active : null} href="/"><span className={navStyles.titleLogo}>SPMS</span></Link>
                </li>
                {/* <li>
                    <Link className={router.pathname == "/" ? navStyles.active : null} href="/">Home</Link>
                </li> */}
                {user ? (user.nickname == 'faculty' ? <li> <Link className={router.pathname == "/outline" ? navStyles.active : null} href="/outline">Course Outline</Link></li> : null) : null}
                {user ? (user.nickname == 'faculty' ? <li> <Link className={router.pathname == "/questionbank" ? navStyles.active : null} href="/questionbank">Question Bank</Link></li> : null) : null}
                {user ? <li> <Link className={router.pathname == "/co" ? navStyles.active : null} href="/co">CO</Link></li> : null}
                {user ? <li> <Link className={router.pathname == "/po" ? navStyles.active : null} href="/po">PO</Link></li> : null}
            </ul>
            <ul className={navStyles.rightAlign}>
                {user ? <li> <Link className={router.pathname == `/user/[...user]` ? navStyles.active : null} href={`/user/${user.nickname}`}>{user.nickname}</Link></li> : null}
                {user ? <li > <Link href="/api/auth/logout"><span className={navStyles.colorRed}>logout</span></Link></li> : <li > <Link href="/api/auth/login"><span className={navStyles.colorGreen}>login</span></Link></li>}
            </ul>
        </nav>
    )
}
export default Nav