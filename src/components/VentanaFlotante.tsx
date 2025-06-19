import { useWaifuStore } from "../store";

export default function VentanaFlotante() {

    const { modal , setModal , currentWaifu } = useWaifuStore()

  if (!modal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center relative min-w-[320px]">
        {/* Botón de cerrar */}
        <button
          className="absolute top-2 right-2 text-white hover:text-red-300 text-2xl cursor-pointer bg-red-900 rounded-full w-8 h-8"
          onClick={() => setModal( false )}
        >
          ×
        </button>
        {/* Fichas encontradas */}
        <div className="flex">
            { currentWaifu.map( waifu => (
                <div key={waifu.id} className="flex flex-col items-center bg-pink-100 rounded-xl p-4 border-b-2 border-white">
                    <img
                    src={ waifu.img }
                    alt={ waifu.name } 
                    className="w-50 h-full object-cover rounded-xl mb-2"
                    />
                    <h2 className="text-lg font-bold text-pink-700">{ waifu.name }</h2>
                </div>
            ))}
          <div className="text-xl font-bold pt-40 m-5"> VS </div>
          <div className="flex flex-col items-center bg-pink-200 rounded-xl p-4">
            <img
              src="https://cdn.myanimelist.net/images/characters/14/282523.jpg"
              alt="Waifu 2"
              className="w-50 h-full object-cover rounded-xl mb-2"
            />
            <h2 className="text-lg font-bold text-pink-700">Waifu 2</h2>
          </div>


        </div>


      </div>
    </div>
  );
}