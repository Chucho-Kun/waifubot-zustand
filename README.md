# WAIFU BATTLE VS - React + TypeScript + Vite

A simple waifu card game to explore the interplay of Zustand in the treatment of the global state.

the site is currently under development
## Developer Notes
### Managed by Zustand
#### src/store/index.ts
```
import { create } from "zustand";
import type { WaifubotDBType } from "../data/db";

 export type WaifuState = {
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

export const useWaifuStore = create<WaifuState>( ( set ) => ({
    anime: '',
    setAnime: ( anime ) => {
        set( { anime } )
    },
    currentWaifu: [],
    addCurrentWaifu: ( currentWaifu ) => {
        set( { currentWaifu } )
    },
    modal: false,
    setModal: ( modal ) => {
        set( { modal } )
    },
    level: 680,
    setLevel: ( level ) => {
        set( { level } )
    },
    allWaifus: false,
    setAllWaifus: ( allWaifus ) => {
        set( { allWaifus } )
    }
}) )
```
