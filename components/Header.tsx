import { UserButton } from '@clerk/nextjs';
import { UserResource } from '@clerk/types'
import Link from 'next/link';

interface HeaderProps {
    user: UserResource | null | undefined;
}

const Header = ({ user }: HeaderProps) => {
    return (
        <div className=' bg-slate-800 h-[100px] text-white shadow-lg flex justify-between py-5 px-5'>
            <div className='flex items-center'>
                
                    Logo
              
            </div>
            <div className='flex gap-2  text-white items-center'>
                <h1>Welcome </h1> 

                 
                    <Link href={'/profile'}>
                    {user?.username}
                    </Link>
                    <UserButton />
                    
                
            </div>
        </div>
    )
}

export default Header
