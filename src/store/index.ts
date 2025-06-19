import { create } from "zustand";
import { WaifubotDB, type WaifubotDBType } from "../data/db";
import { toast } from "react-toastify";
import { devtools } from "zustand/middleware";

 export type WaifuState = {
    waifuListFull: WaifubotDBType[]
    anime: string
    setAnime: ( anime : string ) => void
    currentWaifu: WaifubotDBType[]
    addCurrentWaifu: ( waifu : WaifubotDBType[]) => void
    modal: boolean
    setModal: ( estado : boolean ) => void
    level: number,
    setLevel: ( level : number ) => void
    allWaifus: boolean
    setAllWaifus: ( allWaifus : boolean ) => void
}

export const useWaifuStore = create<WaifuState>()(
    devtools( ( set ) => ({
    waifuListFull: WaifubotDB,
    anime: '',
    setAnime: ( anime ) => {
        set( { anime } )
    },
    currentWaifu: [],
    addCurrentWaifu: ( currentWaifu ) => {
        set( { currentWaifu } )
        toast.success( `Has seleccionado a ${ currentWaifu[0].name }!` , {
            position: 'bottom-left',
            theme: "dark",
            autoClose: 2000
        })
    },
    modal: false,
    setModal: ( modal ) => {
        set( { modal } )
        if( modal ){
            toast.warning( 'Elije una casilla!' ,{
                position: 'bottom-center',
                theme: "dark",
                autoClose: 3000
            })
        }
    },
    level: 680, //680
    setLevel: ( level ) => {
        set( { level } )
    },
    allWaifus: false,
    setAllWaifus: ( allWaifus ) => {
        set( { allWaifus } )
    }
}) ))



  //const [ allWaifus , setAllWaifus ] = useState( false )