import { useRef, useState } from "react"

export const useCounter = (initialValue = 1) => {
    const inputValue = useRef(initialValue)
    const [randomValues, setRandomValues] = useState({increment: 0, decrement: 0})
    //creamos un objeto dentro del valor del state para manejar el incremento y decremento por valor individual
    const [counter, setCounter] = useState(0);
    
    const handleIncrement = () => {
        randomValues.increment 
        ? setCounter(counter + randomValues.increment)
        : setCounter(counter + initialValue)
    }
    const handleReset = () => {
        setCounter( counter - counter );
    }
    const handleDecrement = () => {
        if(counter - randomValues.decrement <= 0)return;
        randomValues.decrement 
        ? setCounter(counter - randomValues.decrement)
        : setCounter(counter - initialValue);
    } 
    const handleApplyIncrement = () => {
        setRandomValues({...randomValues, increment: parseInt(inputValue.current.value)})
        inputValue.current.value = ''
    }
    const handleApplyDecrement = () => {
        setRandomValues({...randomValues, decrement: parseInt(inputValue.current.value)})
        inputValue.current.value = ''
    }
    const handleApplyReset = () => {
        setRandomValues({increment: initialValue, decrement: initialValue})
    }
    return {
        counter,
        handleIncrement,
        handleReset,
        handleDecrement,
        handleApplyIncrement,
        handleApplyDecrement,
        handleApplyReset,
        initialValue,
        inputValue,
    }
}
