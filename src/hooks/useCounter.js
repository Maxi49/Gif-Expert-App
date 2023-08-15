
import { useRef, useState } from "react"


export const useCounter = (initialValue = 1) => {
   
    const inputValue = useRef(initialValue)
    const [randomValues, setRandomValues] = useState({increment: 0, 
    decrement: 0})
    //creamos un objeto dentro del valor del state para manejar el incremento y decremento por valor individual
    const [counter, setCounter] = useState(0);
    const handleIncrement = (randomValue) => {
        
        console.log(randomValue)
    }
    const handleReset = () => {
        setCounter(0);
    }
    const handleDecrement = () => {
        if(counter - randomValues.decrement < 0 || counter - initialValue < 0)return;
        randomValues.decrement 
        ? setCounter(counter - randomValues.decrement)
        : setCounter(counter - initialValue);
    } 

    return {
        counter,
        handleIncrement,
        handleReset,
        handleDecrement,
        initialValue,
        inputValue,
        setRandomValues
    }
}
