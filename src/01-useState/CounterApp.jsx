import { useState } from "react"

export const CounterApp = () => {

    const [state,setCounter] = useState({
        counterOne:10,
        counterTwo:20,
        counterThree:30,
    })
    //siempre "recordar" los valores al state, porque este cambia literalmente el estado de TODOS los valores, o sea cambia el valor literal del estado. Puede pasar de ser un string a un numero
    const { counterOne,counterTwo,counterThree } = state
    const plusOne = () => {
        setCounter({...state,counterOne:counterOne + 1})
    }
    const restart = () => 
    {
        setCounter
        (
            {   
                ...state,
                counterOne:10,
            }
        )
    }


    return (
    <>
        <h1>Counter1: {counterOne}</h1>
        <h1>Counter1: {counterTwo}</h1>
        <h1>Counter1: {counterThree}</h1>

        <hr />
        <button className="btn" onClick={plusOne} >Counter 1 + 1</button>
        <button className="btn" onClick={restart} >Restart</button>
    </>
    )
}
