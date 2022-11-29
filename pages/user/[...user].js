import Link from 'next/link'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';

const User = ({ children }) => {
    const { user, error, isLoading } = useUser();
    return (
        <div>
            <h1>Welcome {user.nickname}!</h1>
        </div>
    )
}
export default User