import { useState } from "react"
import { toast } from "react-toastify"

export default function GameNumbers(  ) {

    const [ waifuValores , setWaifuValores ] = useState( [ 'X' , 'X', 'X' ] )
    const [ rivalValores , setRivalValores ] = useState( [ 'X' , 'X', 'X' ] )

    const rivalArray = [ 8 , 4 , 2 ]

        const rivalRandom  = () => {
        const index_ = Math.floor( Math.random() *rivalArray.length )
        const valor = rivalArray[index_]
        const valor_ = valor.toString() 
  
        return { valor_ , index_ }
    }

        const handleGame = ( index: number , option : string ) => {
        const nuevosValores = [ ...waifuValores ]
        nuevosValores[ index ] = option
        setWaifuValores( nuevosValores )

        const result = rivalRandom()
        const { valor_ , index_ } = result
        const nuevosValoresRival = [ ...rivalValores ]
        nuevosValoresRival[ index_ ] = result.valor_
        setRivalValores( nuevosValoresRival ) 
        console.log(option+' jugando contra... '+result.valor_)

        if( Number( option ) > Number( result.valor_ ) ){
            toast.success( `${ option } es mayor a ${ valor_ } : Excelente la derrotaste!` ,{
                position: 'top-center',
                theme: "dark",
                autoClose: 1000,
                hideProgressBar: true
            })
        }else{
            toast.warning( `${ option } es menor a ${ valor_ } : Fallaste, intentalo de nuevo!` ,{
                position: 'top-center',
                theme: "dark",
                autoClose: 1000,
                hideProgressBar: true
            })

            setTimeout( () => {
                setWaifuValores( [ 'X' , 'X', 'X' ] )
                setRivalValores( [ 'X' , 'X', 'X' ] )
            },500)
        }

        

    }



  return (
    <>
    <div className="flex flex-col w-full items-center bg-white rounded-xl p-4 border-b-2 border-white mr-5">
                    
                    <div className="flex gap-4 justify-center">
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ waifuValores[0] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={waifuValores[0]}
                        readOnly={true}
                        onClick={() => handleGame( 0 , "1" )}
                      />
                      <input
                        type="text" 
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ waifuValores[1] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={waifuValores[1]}
                        readOnly={true}
                        onClick={() => handleGame( 1 , "5" )}
                      />
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ waifuValores[2] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={waifuValores[2]}
                        readOnly={true}
                        onClick={() => handleGame( 2 , "8" )}
                      />
                    </div>

    </div>
    <div className="flex flex-col w-full items-center bg-white rounded-xl p-4 border-b-2 border-white ml-5">
                    
                    <div className="flex gap-4 justify-center">
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ rivalValores[0] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={rivalValores[0]}
                        readOnly={true}
                      />
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ rivalValores[1] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={rivalValores[1]}
                        readOnly={true}
                      />
                      <input
                        type="text"
                        className={`w-16 h-16 text-center border-2 border-gray-400 rounded-md text-xl font-bold cursor-pointer hover:bg-gray-200 ${ rivalValores[2] !== 'X' ? 'text-black' : 'text-gray-300' }`}
                        value={rivalValores[2]}
                        readOnly={true}
                      />
                    </div>

    </div>
    </>
    
  )
}
