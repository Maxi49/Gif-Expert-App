import React,{ useState } from "react";
import PropTypes from "prop-types";

export function AddCategory( { onNewCategory } ) {
    const [ inputValue,setInputValue] = useState('');
    {//! Creamos un useState con una variable de string vacia y una funcion para la misma para ir manejando el estado del input */
    }
    const onInputChange = ( event ) => {
        //console.log(event.target.value)
        setInputValue(event.target.value)
        //!Agarramos el value del input y le decimos que cuando cambie el valor de este tambien cambie el valor del inputvalue  
        //se puede desestructurar el target directamente
    }
    const handleSubmit = ( event ) => {
        event.preventDefault()
              //prevent del refresh
        
        //setCategories(categories => [inputValue,...categories]);
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        //le pasamos el value al prop
        setInputValue(''); 
    }
    return (
        <form onSubmit={ handleSubmit } className="flex justify-center" >
            <input className="px-4 py-2 mt-8 text-lg text-black bg-white border rounded shadow-xl outline-none w-60 md:w-full border-b-slate-950 " type="text" placeholder="Buscar gifs ej:Minecraft"
                value={inputValue /*Es el valor inicial del input */}
                onChange={ onInputChange /* cuando mandemos el form se 
            activa la funcion. Podemos mandar solo la referencia y esto ya recibe el value automaticamente */ } 

            />
    
        </form> 
    );
}

AddCategory.propTypes = {
    
};

export default AddCategory;
