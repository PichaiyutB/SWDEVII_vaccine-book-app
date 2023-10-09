import ProductCard from "./ProductCard"
import Link from 'next/link';


export default async function HospitalCatalog({hospitalJson}: {hospitalJson:Object}){
    const hospitalJsonReady = await hospitalJson

    return(
        <>
        Explore {hospitalJsonReady.count} models in our catalog
        <div style={{margin:"20px" ,display:"flex",flexDirection:"row", flexWrap:"wrap", 
            justifyContent:"space-around", alignContent:"space-around"}}>
                {
                hospitalJsonReady.data.map((hospitalItem:Object)=>(
                    <Link href={`/hospital/${hospitalItem.id}`}  className="w-1/5">
                    <ProductCard hospitalName = {hospitalItem.name} imgSrc = {hospitalItem.picture}/>
                    </Link>

                ))
                }
            </div>
        
        </>
    )
}