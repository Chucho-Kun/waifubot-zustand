import { WaifubotDB } from "../data/db";


export default function Menu({ setAnime }) {

    const animesUnicos = [ ...new Set(WaifubotDB.map(w => w.anime)) ]

    const buttonAnime = ( e ) => {
        const elegido = e.target.id
        setAnime(elegido);
    }

  return (
    <div className="md:w-1/2">
       <div className=" text-center border-blue-800 shadow-2xl items-center justify-center bg-white w-1/2 flex p-6">
        ANIMES
       </div>
       { animesUnicos.map( (animes , i) => (
            <div key={ i } id={ animes } onClick={buttonAnime} className=" text-center border-red-800 shadow-2xl items-center justify-center bg-red-100 w-1/2 flex p-6 cursor-pointer hover:bg-red-200">
                { animes }
            </div>
       ) ) }
       
    </div>
  )
}
