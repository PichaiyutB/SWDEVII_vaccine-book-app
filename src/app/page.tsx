import Image from 'next/image'
import Banner from '@/components/banner'
import ProductCard from '@/components/ProductCard'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div>
        <Banner/>
        <div style={{margin:"20px" ,display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
          <ProductCard/>
       
        </div>
      </div>
    </main>
  )
}
