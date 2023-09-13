'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image';
export default function Banner(){

    const covers = ['/img/vacban.jpg','/img/vacban2.jpg','/img/vacban3.jpg','/img/vacban4.jpg']
    const [index , setIndex] = useState(0)

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
        </div>
    );
}