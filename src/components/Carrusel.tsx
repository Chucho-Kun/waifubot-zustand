import { WaifubotDB } from "../data/db";

export default function Carrusel() {

    const animes = WaifubotDB.filter( ( waifu , index , self ) => self.findIndex( w => w.anime === waifu.anime ) === index)
    console.log(animes)

  return (
     <div className="w-full overflow-x-auto">
      <div className="flex flex-row gap-4 p-4">
        {animes.map( anime => (
          <div
            key={ anime.id }
            className="min-w-[220px] bg-white rounded shadow p-6 flex-shrink-0 cursor-pointer hover:bg-orange-400"
          >
            <h2 className="text-xl font-bold mb-2">{ anime.anime }</h2>
            <p className="text-gray-600">{ anime.company }-{ anime.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
