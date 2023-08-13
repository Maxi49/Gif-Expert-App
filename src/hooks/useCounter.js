import { useRef, useState } from "react"

export const useCounter = (initialValue = 1) => {
    const inputValue = useRef(initialValue)
    const [randomValue, setRandomValue] = useState(0)
    const [counter, setCounter] = useState( 0 );
    const handleIncrement = () => {
        randomValue 
        ? setCounter(counter + randomValue)
        : setCounter(counter + initialValue)
    }
    const handleReset = () => {
        setCounter( counter - counter );
    }
    const handleDecrement = () => {
        if(counter === 0)return;
        randomValue 
        ? setCounter(counter - randomValue)
        : setCounter(counter - initialValue);
    } 
    const handleApplyIncrement = () => {
        setRandomValue(parseInt(inputValue.current.value))
        //si soltamos solo el valor estariamos "asginando" el valor a la constante
    }
    const handleApplyDecrement = () => {
        setRandomValue(parseInt(inputValue.current.value))
    }
    const handleApplyReset = () => {
        setRandomValue(initialValue)
    }
    
    return {
        counter,
        handleIncrement,
        handleReset,
        handleDecrement,
        inputValue,
        handleApplyIncrement,
        handleApplyDecrement,
        initialValue,
        handleApplyReset
    }
}
