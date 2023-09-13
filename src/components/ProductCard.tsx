import { useState } from 'react';
import styles from './ProductCard.module.css'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

import Rating from '@mui/material/Rating';
export default function ProductCard({hospitalName , imgSrc , onCompare, state} : 
    {hospitalName:string , imgSrc:string , onCompare:Function ,state: Map<string,number>})
    {
    let rating= state.get(hospitalName)||0 ;        
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Product Picture' fill={true} className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-black'>
                {hospitalName}
            </div>
           
            <Rating name="simple-controlled" className='h-[10%] mx-2 px-1 py-1'  
            value={rating}
            onChange={(e,newValue)=>{e.stopPropagation(); onCompare(hospitalName,newValue)}} 
            precision={1}/>
        </InteractiveCard>
    );
}
