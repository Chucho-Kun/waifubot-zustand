import { WaifubotDB } from "../data/db";


export default function Menu() {
  return (
    <div className="md:w-1/2" mx-5>
       <div className=" text-center border-blue-800 shadow-2xl items-center justify-center bg-white w-1/2 flex p-6">
        ANIMES
       </div>
       { WaifubotDB.map( waifu => (
            <div className=" text-center border-red-800 shadow-2xl items-center justify-center bg-red-100 w-1/2 flex p-6 cursor-pointer hover:bg-red-200">
        { waifu.anime }
       </div>

       ) ) }
       
    </div>
  )
}
