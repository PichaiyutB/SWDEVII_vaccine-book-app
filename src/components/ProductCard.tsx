import styles from './ProductCard.module.css'
import Image from 'next/image';
export default function ProductCard(){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src='/img/vaccard.jpg' alt='Product Picture' fill={true} objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>
                วัคซีนโควิด การฉีดวัคซีนป้องกันโควิด-19 สามารถลดการแพร่ระบาด ลดความรุนแรงของอาการ
            </div>
        </div>
    );
}