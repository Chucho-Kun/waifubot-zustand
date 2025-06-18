import { WaifubotDB } from "../data/db"

export default function Cards() {

  return (
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {WaifubotDB.map((waifu, i) => (
        <div key={i} className="bg-white rounded shadow p-6 flex flex-row items-center cursor-pointer">
          {/* Imagen a la izquierda, ocupa el alto de la tarjeta */}
          <div className="w-24 h-32 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center mr-4">
            <img
              src="src/assets/react.svg"
              alt={waifu.name}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Contenido a la derecha */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-xl font-bold mb-2 text-pink-800">{waifu.name}</h1>
            <h2 className="text-black">{waifu.anime}</h2>
            <p className="text-gray-500 italic">{waifu.company} - {waifu.year}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
