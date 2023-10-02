'use client'
import ProductCard from "./ProductCard"
import { useReducer } from "react"
import Link from "next/link"
export default function CardPanel(){
    const compareReducer = (compareList:Map<string,number>, action:{ type:string, name:string ,rating:number}) =>{
        switch(action.type){
            case 'add': {
                return new Map(compareList.set(action.name,action.rating))
            }
            case 'remove': {
                compareList.delete(action.name)
                return new Map( compareList )
            }
            default: return compareList 
        }
    }
    const [compareList, dispatchCompare] = useReducer(compareReducer,new Map <string,number>() )
 /*
        Mock 
    */ 
        const mockHospitalRepo = [
            { hid : "001" , name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
            { hid : "002" , name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
            { hid : "003" , name: "Thammasat University Hospital", image: "/img/thammasat.jpg" },
           ]
    return (
        <div>
            <div style={{margin:"20px" ,display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                mockHospitalRepo.map((hospitalItem)=>(
                    <Link href={`/hospital/${hospitalItem.hid}`}  className="w-1/5">
                        <ProductCard state={compareList} hospitalName={hospitalItem.name} imgSrc= {hospitalItem.image}
                        onCompare = { (hosName:string ,rate:number)=> dispatchCompare({type:'add' ,name:hosName , rating:rate }) } />
                    </Link>
                ))
                }
            </div>
            <div className="w-full text-xl font-medium text-black">Compare List : { compareList.size }</div>

            { Array.from(compareList).map( (hos)=><div key={hos[0]} 
            className="text-black" onClick={ ()=>dispatchCompare({ type:'remove' , name:hos[0] , rating:0 }) }>
                {hos[0]} rating is {hos[1]}</div> ) }
        </div>
        
    )

}