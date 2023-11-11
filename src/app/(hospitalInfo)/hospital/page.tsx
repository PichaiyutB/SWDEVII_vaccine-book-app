import CardPanel from "@/components/CardPanel";
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getUserProfile from '@/libs/getUserProfile'
import {getServerSession} from 'next-auth'
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import HospitalCatalog from "@/components/hospitalCatalog";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function Hospital() {
    const hospital = getHospitals()

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium text-black">Select Your Hospital</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospital}/>
            </Suspense> 
        </main>
    )
    const profile = await getUserProfile(session.user.token)
    return (
        <main className="text-center p-5">

            <h1 className="text-xl font-medium text-black">Select Your Hospital</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospital}/>
                {
                    (profile.data.role=="admin")?
                    <AddHospitalForm></AddHospitalForm>
                    :null
                }
            </Suspense> 
        </main>
    );

}