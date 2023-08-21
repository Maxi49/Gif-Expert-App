import React, { useRef, useState, useTransition } from 'react'
import { useFormik } from 'formik'



export const CounterHook = () => {
    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState('')
    const [buttonValue, setButtonValue] = useState({buttonValueIncrement : `+${1}`,buttonValueDecrement : `-${1}`})
    const [userCustomValue, setCustomValue] = useState({customIncrement : 0,customDecrement: 0})
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
        if(counter + 1 > 1000 || counter + userCustomValue.customIncrement > 1000)return
        userCustomValue.customIncrement 
        ? setCounter(counter + userCustomValue.customIncrement)
        : setCounter(counter + 1)
    }
    const handleDecrement = () => {
        if(counter - counter < 0 || counter - userCustomValue.customDecrement < 0)return
        userCustomValue.customDecrement
        ? setCounter(counter - userCustomValue.customDecrement)
        : setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(0)
    }

    const formik = useFormik(
        {
        initialValues: {
            customValue: '',
            name : ''
        },
        onSubmit: values => {
            const { submitter } = event
            if(submitter.name == 'incrementButton'){
                if(values.customValue > 500)return
                else if(values.customValue <= 0)return
                else{
                    setCustomValue({...userCustomValue,customIncrement : parseInt(values.customValue)})
                    setButtonValue({...buttonValue,buttonValueIncrement : `+${values.customValue}`})
                }
                
            }
            else if(submitter.name == 'decrementButton'){
                if(values.customValue > 500)return
                else if(values.customValue <= 0)return
                setCustomValue({...userCustomValue, customDecrement : parseInt(values.customValue)})
                setButtonValue({...buttonValue,buttonValueDecrement : `-${values.customValue}`})
            }
            else if(value === 'reset'){
                setCustomValue({customDecrement:0,customIncrement:0})
                setButtonValue({buttonValueIncrement:`+${1}`,buttonValueDecrement : `-${1}`})
            }
            values.customValue = ''
        },
        });
    return (
    <div className='container text center'>
        <h1>CounterHook: {counter} </h1>
        <hr />
        <button className='btn btn-primary' onClick={handleIncrement} >{buttonValue.buttonValueIncrement}</button>
        <button className='btn btn-primary' onClick={handleReset} >reset</button>
        <button className='btn btn-primary' onClick={handleDecrement}>{buttonValue.buttonValueDecrement}</button>
        <form onSubmit={formik.handleSubmit}>
            <label className='h3 mb-3 mt-3' htmlFor="customValue">
                CustomValue
            </label>
            <input className='form-control mb-3 bg-body-tertiary rounded shadow'type="text" id='customValue' name='customValue' onChange={formik.handleChange} value={formik.values.customValue}/>
            <button type="submit" name='incrementButton' onClick={setIncrement} className='btn btn-primary ' >Apply value to increment</button>
            <button className='btn btn-primary' type="submit" name='decrementButton' onClick={setDecrement} >Apply value to decrement</button>
            <button className='btn btn-primary' type="submit" name='action' onClick={setReset} >reset Custom Values</button>
        </form>
    </div>
    )
}

/*
    Explicacion del codigo :
        Tengo un componente llamado CounterHook,
        este tiene importado un hook que realiza lo siguiente :
            toma un valor inicial, y se lo pasa a un useState
            llamado counter. Este hook tambien tiene una funcion para sumar el counter. Luego se pasa el hook y se lo importa al CounterHook, y de ahi como este retorna un objeto, destructuramos el counter y la funcion plus. Por ultimo pasamos el plus al button +1 en el onClick
*/
