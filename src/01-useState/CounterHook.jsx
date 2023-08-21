import React, { useRef, useState, useTransition } from 'react'
import { useFormik,Form } from 'formik'



export const CounterHook = () => {
    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState('')

    const setIncrement = () =>{ 
        setValue('increment')
    }
    
    const setDecrement = () =>{ 
        setValue('decrement')
    }

    const setReset = () => {
        setValue('reset')
    }

    const handleIncrement = () => {
        userCustomValue.customIncrement 
        ? setCounter(counter + userCustomValue.customIncrement)
        : setCounter(counter + 1)
    }
    const handleDecrement = () => {
        userCustomValue.customDecrement
        ? setCounter(counter - userCustomValue.customDecrement)
        : setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(0)
    }

    const [userCustomValue, setCustomValue] = useState(
        {  
            customIncrement : 0,
            customDecrement: 0
        }
    )
    const formik = useFormik({
        initialValues: {
          customValue: '',
          action:''
        },
        onSubmit: values => {
            if(value === 'increment'){
                setCustomValue({...userCustomValue,customIncrement : parseInt(values.customValue)})
            }
            else if(value === 'decrement'){
                setCustomValue({...userCustomValue, customDecrement : parseInt(values.customValue)})
            }
            else if(value === 'reset'){
                setCustomValue({customDecrement:0,customIncrement:0})
            }
        },
      });
    return (
    <>
        <h1>CounterHook: {counter} </h1>
        <hr />
        <button className='btn btn-primary' onClick={handleIncrement} >+1</button>
        <button className='btn btn-primary' onClick={handleReset} >reset</button>
        <button className='btn btn-primary' onClick={handleDecrement}>-1</button>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="customValue">
                CustomValue
            </label>
            <input type="text" id='customValue' name='customValue' onChange={formik.handleChange} value={formik.values.customValue}/>
            <button type="submit" name='action' onClick={setIncrement} >Apply value to increment</button>
            <button type="submit" name='action' onClick={setDecrement} >Apply value to decrement</button>
            <button type="submit" name='action' onClick={setReset} >reset Custom Values</button>
        </form>
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
