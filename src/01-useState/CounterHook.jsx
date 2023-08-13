import React from 'react'
import { useCounter } from '../hooks/useCounter'


export const CounterHook = () => {

    const { counter,handleIncrement,handleReset,handleDecrement,handleApplyDecrement,handleApplyIncrement,handleApplyReset,initialValue,inputValue} = useCounter()
    return (
    <>
        <h1>CounterHook: {counter} </h1>
        <hr />
        <button className='btn btn-primary' onClick={handleIncrement} >+1</button>
        <button className='btn btn-primary' onClick={handleReset} >reset</button>
        <button className='btn btn-primary' onClick={()=> handleDecrement(2)}>-1</button>
        <h2>Custom Value</h2>
        <div className='input-group mb-3'>
            <input type="text" ref={inputValue}/>
        </div>
        <button className='btn btn-secondary' onClick={handleApplyIncrement} >Apply to Increment</button>
        <button className='btn btn-secondary' onClick={handleApplyDecrement} >Apply to decrement</button>
        <button className='btn btn-secondary' onClick={handleApplyReset} >Reset Values</button>
    </>
    )
}

/*
    Explicacion del codigo :
        Tengo un componente llamado CounterHook,
        este tiene importado un hook que realiza lo siguiente :
            toma un valor inicial, y se lo pasa a un useState
            llamado counter. Este hook tambien tiene una funcion para sumar el counter. Luego se pasa el hook y se lo importa al CounterHook, y de ahi como este retorna un objeto, destructuramos el counter y la funcion plus. Por ultimo pasamos el plus al button +1 en el onClick


*/
