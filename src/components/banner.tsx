import styles from './banner.module.css'
import Image from 'next/image';
export default function Banner(){
    return (
        <div className={styles.banner}>
            <Image src={'/img/vacban.jpg'} alt='cover' 
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