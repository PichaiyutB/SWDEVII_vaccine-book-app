import LocationDateReserve from "@/components/LocationDateReserve";

export default function Booking(){

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 py-5">
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">วันที่ต้องการรับวัคซีน</div>
                <LocationDateReserve/>

            </div>

          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">จอง</button>
            
        </main>
    );
}