import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import HospitalCatalog from "@/components/hospitalCatalog";
export default function Hospital() {
    const hospital = getHospitals()

    return (
        <main className="text-center p-5">

            <h1 className="text-xl font-medium text-black">Select Your Hospital</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospital}/>
            </Suspense>
            
        </main>

    );

}