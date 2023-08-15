import React from 'react'
import { useCounter } from './useCounter'

export default function useRandom(randomValue,handleIncrement) {

    const handleApplyIncrement = () => {
        /*setRandomValues({...randomValues, increment: parseInt(inputValue.current.value)})
        inputValue.current.value = ''*/
        handleIncrement(parseInt(randomValue.current.value))
    }
    const handleApplyDecrement = () => {
        /*setRandomValues({...randomValues, decrement: parseInt(inputValue.current.value)})
        inputValue.current.value = ''¨*/
    }
    const handleApplyReset = () => {
        /*setRandomValues({increment: initialValue, decrement: initialValue})*/
        
    }
    return{
        handleApplyDecrement,
        handleApplyIncrement,
        handleApplyReset
    }
}
