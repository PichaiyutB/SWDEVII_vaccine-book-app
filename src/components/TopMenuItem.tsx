import styles from './topmenu.module.css'
import Link from 'next/link';
export default function TopMenuItem( { title, pageRef } : {title:string, pageRef :string} ) {
    return(
        <Link href={pageRef} className='w-24 text-center my-auto font-sans font-normal text-sm text-gray-500 mr-2'>
            {title}
        </Link>
    );
}