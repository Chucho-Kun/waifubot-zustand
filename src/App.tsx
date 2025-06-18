import Viewer from "./components/Viewer"
import Menu from './components/Menu';
import Animes from './components/Animes';

function App() {

  return (
    <>
     <div className="text-3xl text-center bg-pink-700 p-10 text-white font-black">WAIFUBOT WIKIPEDIA</div>
     <div className="container mx-auto">
     <div className="mt-5 md:flex">
        <Viewer />
        <Menu />
        <Animes />
     </div>
     </div>
    </>
  )
}

export default App
