import { useEffect, useState } from 'react';
import Cards from "./components/Cards";
import Carrusel from "./components/Carrusel";

function App() {

  const [ anime , setAnime ] = useState('')
  const [ allWaifus , setAllWaifus ] = useState( false )

 useEffect( () => {
    const buttonAllWaifus = anime === 'TODOS' ? true : false
     setAllWaifus( buttonAllWaifus )
  } , [ anime ])

  return (
    <>
     <div className="text-3xl text-center bg-pink-700 p-10 text-white font-black">WAIFUBOT WIKIPEDIA</div>
     <h2 className="text-2xl text-black font-bold p-4 ">Select an anime</h2>
     <Carrusel setAnime={setAnime} />
     <Cards anime={ anime } />
     <div className="container mx-auto">
     <div className='flex justify-center items-center'>
        <button 
          disabled={ allWaifus }
          className={`bg-indigo-600 rounded-xl p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-colors w-2xl ${ allWaifus ? 'opacity-50 cursor-default' : 'cursor-pointer' }`}
          onClick={ () => setAnime( 'TODOS' ) }
          >VER TODAS LAS WAIFUS
        </button>
     </div>
     </div>
    </>
  )
}

export default App
