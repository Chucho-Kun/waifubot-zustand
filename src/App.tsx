import Viewer from "./components/Viewer"
import Animes from './components/Animes';
import Waifus from './components/Waifus';
import { useState } from 'react';
import Cards from "./components/Cards";
import Carrusel from "./components/Carrusel";

function App() {

  const [ anime , setAnime ] = useState('')

  return (
    <>
     <div className="text-3xl text-center bg-pink-700 p-10 text-white font-black">WAIFUBOT WIKIPEDIA</div>
     <h2 className="text-2xl text-black font-bold p-4">Select an anime</h2>
     <Carrusel />
     <Cards />
     <div className="container mx-auto">
     <div className="mt-5 md:flex">
        <Viewer />
        <Waifus anime={anime} />
        <Animes setAnime={setAnime} />
     </div>
     </div>
    </>
  )
}

export default App
