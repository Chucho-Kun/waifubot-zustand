import { useEffect, useState } from 'react';
import Cards from "./components/Cards";
import Carrusel from "./components/Carrusel";
import VentanaFlotante from './components/VentanaFlotante';

function App() {

  const [ anime , setAnime ] = useState('')
  const [ allWaifus , setAllWaifus ] = useState( false )
  const [ character , setCharacter ] = useState( [] )
  const [ level , setLevel ] = useState( 680 ) // 680
  const [ modal , setModal ] = useState( false )

 useEffect( () => {
    const buttonAllWaifus = anime === 'TODOS' ? true : false
     setAllWaifus( buttonAllWaifus )
  } , [ anime ])

  return (
    <>
     <div className="text-3xl text-center bg-pink-700 p-10 text-white font-black">WAIFU BATTLE VS</div>
     <h2 className="text-2xl text-black font-bold p-4 ">Selecciona un personaje de estos animes:</h2>
     <Carrusel setAnime={setAnime} level={level} />
     <Cards anime={ anime } setCharacter={setCharacter} character={character} level={level} />


     {/*<div className="container mx-auto">
     <div className='flex justify-center items-center'>
        <button 
          disabled={ allWaifus }
          className={`bg-indigo-600 rounded-xl p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-colors w-2xl ${ allWaifus ? 'opacity-50 cursor-default' : 'cursor-pointer' }`}
          onClick={ () => setAnime( 'TODOS' ) }
          >VER TODAS LAS WAIFUS
        </button>
     </div>
     </div> */}


      <VentanaFlotante visible={ modal } onClose={() => setModal(false)} character={character} />

    <div className='flex justify-center items-center'>
        <button 
          disabled={character.length < 1}
          className={`mb-20 rounded-xl p-3 text-white uppercase font-bold w-2xl ${ character.length < 1 ? 'opacity-50 cursor-default bg-gray-600' : 'cursor-pointer bg-indigo-600 hover:bg-indigo-700 transition-colors' }`}
          onClick={ () => setModal( true ) }
          >IR A LA PELEA
        </button>
    </div>
    </>
  )
}

export default App
