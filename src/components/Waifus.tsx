import { WaifubotDB } from "../data/db";


export default function Waifus( { anime }) {
  return (
    <div className="md:w-1/2">
       <div className=" text-center border-blue-800 shadow-2xl items-center justify-center bg-white w-1/2 flex p-6">
        WAIFUS
       </div>
       { WaifubotDB.map( waifu => (
            <div key={waifu.id} className=" text-center border-red-800 shadow-2xl items-center justify-center bg-red-100 w-1/2 flex p-6 cursor-pointer hover:bg-red-200">
        { waifu.name }
       </div>

       ) ) }
       
    </div>
  )
}
