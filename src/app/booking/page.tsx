"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getUserProfile from '@/libs/getUserProfile'
import dayjs,{Dayjs} from "dayjs"
import { addReservation } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interfaces";
import { AppDispacth } from "@/redux/store";
import {useDispatch}  from "react-redux"
import {useState} from "react"
export default function Booking(){

    /*const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)*/

    const dispatch = useDispatch<AppDispacth>()
    const makeBooking = () => {
        if(id && name && surname && bookDate && bookLocation){
            const book: BookingItem ={
            name: name,
            surname: surname,
            cid: id,
            hospital: bookLocation,
            date: dayjs(bookDate).format("YYYY/MM/DD"),
        }
        dispatch(addReservation(book))
        }       
    }
    
    const [bookDate,setBookDate] = useState<Dayjs|null>(null)
    const [bookLocation,setBookLocation] = useState<string>('Chulalongkorn Hospital')
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [id, setId] = useState<string>("")



    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 py-5">
            
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">วันที่ต้องการรับวัคซีน</div>
                <LocationDateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}} 
                onLocationChange={(value:string)=>{setBookLocation(value)}}
                onNameChange={(value:string)=>{setName(value)}}
                onIdChange={(value:string)=>{setId(value)}}
                onSurnameChange={(value:string)=>{setSurname(value)}}/>

            </div>

          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
          onClick={makeBooking}>
            จอง</button>
            
        </main>
    );
}

/*<table className='table-auto border-separate border-spacing-2 text-black'>
                <tbody>
                    <tr><td>Name</td><td>{profile.data.name}</td></tr>
                    <tr><td>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                    <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
 </table> */