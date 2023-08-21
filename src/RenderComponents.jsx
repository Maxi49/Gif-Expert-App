import React, { useState } from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterHook } from './01-useState/CounterHook'
import { SimpleForm } from './02-useEffect/SimpleForm'

const RenderComponents = () => {
    const [componentRender, setComponentRender] = useState(null)

    const handleButtonClick = (componentName) => {
        setComponentRender(componentName)
    }
    return(
        <>
            <h1 className='h1' >Select the component you want to render </h1>
            <div> 
            <button className='btn btn-primary  mb-10' onClick={() => handleButtonClick('CounterApp')}>CounterApp</button>
            <button className=' mb-10 btn btn-primary' onClick={() => handleButtonClick('CounterHook')}>CounterHook</button>
            <button className='mb-10 btn btn-primary' onClick={() => handleButtonClick('SimpleForm')}>SimpleForm</button>
            </div> 
            <div>
                {componentRender === 'CounterApp' && <CounterApp/>}
                {componentRender === 'CounterHook' && <CounterHook/>}
                {componentRender === 'SimpleForm' && <SimpleForm/>}
            </div>
        </>
    )
}

export default RenderComponents