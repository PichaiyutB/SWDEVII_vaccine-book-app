import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Link } from '@mui/material';
export default async function TopMenu(){

    const session = await getServerSession(authOptions)

    return(
        <div className="h-16 bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-lightgray flex flex-row justify-end">
            <TopMenuItem title='Menu Item Booking' pageRef='/booking'/>
            <Image src={'/img/vaclogo.png'} className='h-full w-auto mr-3' alt='logo' width={0} height={0} sizes='100vh'/>
            <div className='flex flex-row absolute left-5 h-full'>    

            {
                session? <Link href="/api/auth/signout"> 
                <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                    Sign-Out of {session.user?.name}</div> </Link>
                : <Link href="/api/auth/signin">
                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                Sign-In</div></Link>

            }
            <TopMenuItem title='My Booking' pageRef='/mybooking'/>
            </div>
        
        </div>
    );
}