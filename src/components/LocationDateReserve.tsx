'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Select,MenuItem } from "@mui/material"
import {TextField} from "@mui/material"
export default function LocationDateReserve(){
    return (
        <div className="bg-slate-100 rounded-lg
        w-fit px-10 py-5 flex flex-col justify-center">
            <div className="bg-slate-100 rounded-lg space-x-7
            w-fit px-10 py-5 flex flex-row justify-center">
                <TextField id="outlined-basic" label="Name" variant="standard" sx={{width:250}}/>
                <TextField id="outlined-basic" label="ID-Card" variant="standard" sx={{width:250}}/>
            </div>
            <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
            w-fit px-10 py-5 flex flex-row justify-center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="bg-white"/>
                </LocalizationProvider>

                <Select variant="standard" name="location" id="location" 
                className="h-[2em] w-[250px] ">
                    <MenuItem value="CU">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="RAJ">Rajavithi Hospital</MenuItem>
                    <MenuItem value="THA">Thammasat University Hospital</MenuItem>
                </Select>
            </div>
        </div>
    )
}