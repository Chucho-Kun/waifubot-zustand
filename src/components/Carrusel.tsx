import { WaifubotDB } from "../data/db";
import { type Dispatch } from "react";

type CarruselProps = {
    setAnime:Dispatch<React.SetStateAction<string>>
    level: number
}

export default function Carrusel( { setAnime , level } : CarruselProps  ) {

    const animes = WaifubotDB.filter( ( waifu , index , self ) => self.findIndex( w => w.anime === waifu.anime ) === index)
    const animesbyYear = animes.sort( (a,b) => Number(a.year) - Number(b.year) )

    console.log( {animesbyYear} )

    const handleAnime = ( anime : string ) => {
        setAnime( anime )
    };


  return (
     <div className="w-full overflow-x-auto">
      <div className="flex flex-row gap-4 p-4">
        {animesbyYear.map( anime => (
            anime.level <= level && (
          <button
            key={ anime.id }
            className="min-w-[220px] bg-white rounded shadow p-6 flex-shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => handleAnime( anime.anime )}    
          >
            <h2 className="text-xl font-bold mb-2">{ anime.anime }</h2>
            <p className="text-white bg-amber-700">{ anime.year}</p>
            <p className="text-gray-600">{ anime.company }</p>
          </button>
          )
        ))}
      </div>
    </div>
  )
}
