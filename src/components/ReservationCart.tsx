"use client"
import { useAppSelector ,AppDispacth} from "@/redux/store"
import {useDispatch} from "react-redux"
import { removeReservation } from "@/redux/features/bookSlice"
export default function ReservationCart(){

    const bookItems = useAppSelector( (state) => state.bookSlice.bookItems )
    const dispatch = useDispatch<AppDispacth>()
    
    return(
            <>
            {bookItems  ? (
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItems.cid}>
                <div className="text-xl text-black">Name {bookItems.name}</div>
                <div className="text-xl text-black">Surname {bookItems.surname}</div>
                <div className="text-xl text-black">Id {bookItems.cid}</div>
                <div className="text-xl text-black">Hospital {bookItems.hospital}</div>
                <div className="text-xl text-black">Date {bookItems.date}</div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
          onClick={() => {dispatch(removeReservation(bookItems));}}>
            Remove</button>
            </div>
                    )
             : (
            <div className="text-xl text-black">No Vaccine Booking</div>
            )

            }
            </>
    )
}