import { dbConnect } from '@/db/dbConnect'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import Hospital from '@/db/models/Hospital'

export default function AddHospitalForm(){

    const addHospital =async (AddHospitalForm:FormData) => {
        "use server"
        const name =AddHospitalForm.get('name');
        const address =AddHospitalForm.get('address');
        const district =AddHospitalForm.get('district');
        const province =AddHospitalForm.get('province');
        const postalcode =AddHospitalForm.get('postalcode');
        const tel =AddHospitalForm.get('tel');
        const picture =AddHospitalForm.get('picture');
        try{
            await dbConnect()
            const car=await Hospital.create({
                "name":name,
                "address": address,
                "district" : district,
                "province": province,
                "postalcode": postalcode,
                "tel": tel,
                "picture": picture,
            })
        }catch(error){
            console.log(error);
        }
        revalidateTag("hospitals")
        redirect("/hospital")
    }
    return (
        <form action={addHospital}>
                    <div className='text-xl text-blue-700'>Create Hospital</div>
                    <div className='flex item-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='name'>name</label>
                        <input type='text' required id='name' name='name' placeholder='Hospital name'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex item-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='address'>address</label>
                        <input type='text' required id='address' name='address' placeholder='Hospital address'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex item-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='district'>district</label>
                        <input type='text' required id='district' name='district' placeholder='District'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex item-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='province'>province</label>
                        <input type='text' required id='province' name='province' placeholder='province'
                        className='bg-white border-2 border-gray-200 rounded w-auto p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                        <label className='w-auto block text-gray-700 pr-4 ml-5' htmlFor='postalcode'>postal code</label>
                        <input type='text' required id='postalcode' name='postalcode' placeholder='postal code'
                        className='bg-white border-2 border-gray-200 rounded w-auto p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex item-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='tel'>tel</label>
                        <input type='text' required id='tel' name='tel' placeholder='tel'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <div className='flex item-center w-1/2 my-2'>
                        <label className='w-auto block text-gray-700 pr-4' htmlFor='picture'>picture</label>
                        <input type='text' required id='picture' name='picture' placeholder='URL'
                        className='bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400'/>
                    </div>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded'>Add New Hospital</button>
                </form>
    )
}