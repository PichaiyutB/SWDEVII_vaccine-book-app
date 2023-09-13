'use client'
import ProductCard from "./ProductCard"
import { useReducer } from "react"

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

    return (
        <div>
            <div style={{margin:"20px" ,display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                <ProductCard state={compareList} hospitalName='Chulalongkorn Hospital' imgSrc='/img/chula.jpg'
                onCompare = { (hosName:string ,rate:number)=> dispatchCompare({type:'add' ,name:hosName , rating:rate }) } />
                <ProductCard state={compareList} hospitalName='Rajavithi Hospital' imgSrc='/img/rajavithi.jpg'
                onCompare = { (hosName:string ,rate:number)=> dispatchCompare({type:'add' ,name:hosName , rating:rate }) } />
                <ProductCard state={compareList} hospitalName='Thammasat University Hospital' imgSrc='/img/thammasat.jpg'
                onCompare = { (hosName:string ,rate:number)=> dispatchCompare({type:'add' ,name:hosName , rating:rate }) } />
            </div>
            <div className="w-full text-xl font-medium text-black">Compare List : { compareList.size }</div>

            { Array.from(compareList).map( (hos)=><div key={hos[0]} 
            className="text-black" onClick={ ()=>dispatchCompare({ type:'remove' , name:hos[0] , rating:0 }) }>
                {hos[0]} rating is {hos[1]}</div> ) }

        </div>
        
    )

}