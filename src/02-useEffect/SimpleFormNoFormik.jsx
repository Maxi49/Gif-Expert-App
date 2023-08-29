import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleFormNoFormik = () => {

    const [formState, setFormState] = useState(
        {
            username: 'strider',
            email: ''
        }
    )
    const { email,username } = formState;
    useEffect( () => {
      //console.log('useEffect has been called')
    },[]);
    useEffect( () => {
      //console.log('FormState has Changed')
    },[formState]//ahora cada que cambie el estado del formState el effect se va a disparar
    );
    //!UE : useEffect
    useEffect( () => {
      //console.log('The Email has changed')
    },[email]); // si cambia el estado del email se dispara el UE
    //no poner useEffect sin dependencias
    /*
    Se recomienda que en vez de hacer effects que hagan muchas cosas, realizar mejor varios effects para cosas especificas
    
    [] : lo llama cada vez que el componente se renderiza (completo) 
    */


    const onInputChange = ({ target }) => {
      const { name,value } = target
      setFormState({
        ...formState,
        [ name ]: value
      })
    }
  /*agarra el name del input que esta cambiando, y accede al valor interno de este, por eso los corchetes, entonces le asignamos que el nuevo valor de la propiedad interna del name que cambio es el value que yo estoy ingresando en el input */

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text"
          className='form-control m-3'
          placeholder='Username'
          name='username'
         value={username}
         onChange={onInputChange}/>

        <input type='email'
         className='form-control m-3'
         placeholder='email'
         name='email'
         value={email}
         onChange={onInputChange}/>

         

         {
          (username === 'strider2') && <Message/>
         }
    </>
  )
}