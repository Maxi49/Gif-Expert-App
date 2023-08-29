import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    
    const { formState,onInputChange,username,email,password,onResetForm } = useForm({username:'',email:'',password:'',})
    
    
    //dos formas o haces la funcion aca extrayendo el setFormState
    //o creas la funcion en el custom hook y lo desestructuras desde el useForm y lo mandas a llamar
    


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

        <input type='password'
          className='form-control m-3'
          placeholder='Contraseña'
          name='password'
          value={ password }
          onChange={onInputChange}
          autoComplete='email'
          />

          <button onClick={onResetForm} className='btn btn-primary'>Borrar</button>
    

    </>
  )
}
