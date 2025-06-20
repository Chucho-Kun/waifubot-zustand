# WAIFU BATTLE VS - React + TypeScript + Vite

A simple waifu card game to explore the interplay of Zustand in the treatment of the global state.

the site is currently under development
## Developer Notes
### Managed by Zustand
#### src/store/index.ts
```
import { create } from "zustand";
import { WaifubotDB, type WaifubotDBType } from "../data/db";
import { toast } from "react-toastify";
import { devtools } from "zustand/middleware";

 export type WaifuState = {
    waifuListFull: WaifubotDBType[]
    setWaifuList: ( id : number ) => void
    anime: string
    setAnime: ( anime : string ) => void
    currentWaifu: WaifubotDBType[]
    addCurrentWaifu: ( waifu : WaifubotDBType[]) => void
    resetCurrentWaifu: () => void
    modal: boolean
    setModal: ( estado : boolean ) => void
    level: number,
    setLevel: ( level : number ) => void
    allWaifus: boolean
    setAllWaifus: ( allWaifus : boolean ) => void
    challenger: string
    setChallenger: ( challenger : string ) => void
    rival: WaifubotDBType[]
    setRival: () => void
}

export const useWaifuStore = create<WaifuState>()(
    devtools( ( set ) => ({
    waifuListFull: WaifubotDB,
    setWaifuList: ( id ) => {
        set( ( state ) => ({
            waifuListFull: state.waifuListFull.map( waifu => waifu.id === id ? { ...waifu , seleccionable: true } : waifu )
        })) 
    },
    anime: '',
    setAnime: ( anime ) => {
        set( { anime } )
    },
    currentWaifu: [],
    addCurrentWaifu: ( currentWaifu ) => {
        set( { currentWaifu } )
        toast.success( `Has seleccionado a ${ currentWaifu[0].name }!` , {
            position: 'top-center',
            theme: "dark",
            autoClose: 2000,
            hideProgressBar: true
        })
    },
    resetCurrentWaifu: () => {
        set( { currentWaifu : [] } )
    },
    modal: false,
    setModal: ( modal ) => {
        set( { modal } )
        if( modal ){
            toast.warning( 'Elije una de las casillas de tu Waifu!' ,{
                position: 'top-left',
                theme: "dark",
                autoClose: 3000,
                hideProgressBar: true
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
    },
    challenger: 'x',
    setChallenger: ( challenger ) => {
        set( { challenger } )
    },
    rival:[],
    setRival: () => {

    }
}) ))

```
