import React, { useState } from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterHook } from './01-useState/CounterHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormNoFormik } from './02-useEffect/SimpleFormNoFormik'


const RenderComponents = () => {
    const [componentRender, setComponentRender] = useState(
        {
            componentCounterApp : '',
            componentSimpleFormNoFormik : '',
            componentCounterHook: '',
        }
    )
    const handleButtonClick = () => {
        const render = document.activeElement
        render.name === 'CounterApp' && setComponentRender('CounterApp')
        render.name === 'CounterHook' && setComponentRender('CounterHook')
        render.name === 'SimpleFormNoFormik' && setComponentRender('SimpleFormNoFormik')
    }
    return(
        <>
            <h1 className='h1' >Select the component you want to render </h1>
            <div> 
            <button className='btn btn-primary mb-10' name='CounterApp' onClick={ handleButtonClick}>CounterApp</button>
            <button className=' mb-10 btn btn-primary' name='CounterHook'onClick={() => handleButtonClick('CounterHook')}>CounterHook</button>
            <button className='mb-10 btn btn-primary'name='SimpleFormNoFormik'onClick={() => handleButtonClick('SimpleFormNoFormik')}>SimpleForm</button>
            </div> 
            <div>
                {componentRender === 'CounterApp' && <CounterApp/>}
                {componentRender === 'CounterHook' && <CounterHook/>}
                {componentRender === 'SimpleFormNoFormik' && <SimpleFormNoFormik/>}
            </div>
        </>
    )
}

export default RenderComponents