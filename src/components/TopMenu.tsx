import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
export default function TopMenu(){
    return(
        <div className="h-16 bg-white fixed top-0 left-0 right-0 z-30 border-t border-b border-lightgray flex flex-row justify-end">
            <TopMenuItem title='Menu Item Booking' pageRef='/booking'/>
            <Image src={'/img/vaclogo.png'} className='h-full w-auto mr-3' alt='logo' width={0} height={0} sizes='100vh'/>
        </div>
    );
}