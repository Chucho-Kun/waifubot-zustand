import { WaifubotDB } from "../data/db";
import { useWaifuStore } from "../store";

export default function Carrusel() {

    const { setAnime , anime , level } = useWaifuStore()

    const animes = WaifubotDB.filter( ( waifu , index , self ) => self.findIndex( w => w.anime === waifu.anime ) === index)
    const animesbyYear = animes.sort( (a,b) => Number(a.year) - Number(b.year) )


  return (
     <div className="w-full overflow-x-auto">
      <div className="flex flex-row gap-4 p-4">
        {animesbyYear.map( anime_ => (
            anime_.level <= level && (
          <button
            key={ anime_.id }
            className={`min-w-[220px] ${ anime == anime_.anime ? 'bg-gray-100' : 'bg-white' } rounded shadow p-6 flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors`}
            onClick={() => setAnime( anime_.anime )}    
          >
            <h2 className="text-xl font-bold mb-2">{ anime_.anime }</h2>
            <p className="text-white bg-amber-700">{ anime_.year}</p>
            <p className="text-gray-600">{ anime_.company }</p>
          </button>
          )
        ))}
      </div>
    </div>
  )
}
