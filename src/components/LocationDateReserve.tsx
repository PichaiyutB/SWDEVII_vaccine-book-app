"use client"
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select,MenuItem } from "@mui/material"
import {TextField} from "@mui/material"
import {Dayjs} from "dayjs"
export default function LocationDateReserve({onDateChange , onLocationChange ,onNameChange , onSurnameChange, onIdChange} : 
    {onDateChange:Function, onLocationChange:Function ,onNameChange:Function , onSurnameChange:Function, onIdChange:Function}){
    
        const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
        const [location,setlocation] = useState('Chulalongkorn Hospital')
        const [name, setName] = useState<string>("")
        const [surname,setSurname] = useState<string>("")
        const [id,setId] = useState<string>("")

        

        return (
        <div className="bg-slate-100 rounded-lg
        w-fit px-10 py-5 flex flex-col justify-center">
            <div className="bg-slate-100 rounded-lg space-x-7
            w-fit px-10 py-5 flex flex-row justify-center">
                <TextField id="outlined-basic" label="Name" variant="standard" sx={{width:200}} 
                value={name} onChange = {(e) => {setName(e.target.value); onNameChange(e.target.value)}}/>
                <TextField id="outlined-basic" label="Surname" variant="standard" sx={{width:200}}
                value={surname} onChange = {(e) => {setSurname(e.target.value); onSurnameChange(e.target.value)}}/>
                <TextField id="outlined-basic" label="ID-Card" variant="standard" sx={{width:200}}
                value={id} onChange = {(e) => {setId(e.target.value); onIdChange(e.target.value)}}/>
            </div>
            <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
            w-fit px-10 py-5 flex flex-row justify-center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white"
                    value={reserveDate} 
                    onChange={ (value)=> {setReserveDate(value); onDateChange(value);} }/>
                </LocalizationProvider>

                <Select variant="standard" name="location" id="location" 
                className="h-[2em] w-[250px]" value={location}
                onChange={ (e)=> {setlocation(e.target.value); onLocationChange(e.target.value)} }>
                    <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
                    <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
                </Select>
            </div>
        </div>
    )
}