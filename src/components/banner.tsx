'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import Image from 'next/image';
export default function Banner(){

    const covers = ['/img/vacban.jpg','/img/vacban2.jpg','/img/vacban3.jpg','/img/vacban4.jpg']
    const [index , setIndex] = useState(0)
    const router = useRouter()

    return (
        <div className={styles.banner} onClick={()=>{ setIndex(index+1);}}>
            <Image src={covers[index%4]} alt='cover' 
            fill={true}
            objectFit='cover'
            priority
            />
            <div className={styles.bannerText}>
                <h1 className='text-3xl font-medium'>ประชาสัมพันธ์การให้บริการวัคซีน</h1>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent' 
            onClick={(e)=> { e.stopPropagation();  router.push('/hospital')} }>
                Select Hospital
            </button>
        </div>
    );
}