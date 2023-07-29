import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )
    const getImages = async() => {
        const images = await getGifs(category)
        setImages(images)
        setIsLoading(false);
    }
    useEffect( () => {
        getImages()
    //nunca poner una promesa dentro de un useEffect
    //useEffect : hook de react que sirve para disparar efectos secundarios una sola vez
    //las dependencias le indican al useEffect en base a que condiciones y cuantas veces se tiene que disparar el efecto secundario : El array vacio indica que el useEffect se tiene que disparar una sola vez por categoria nueva, por lo que seria solo una unica peticion http por renderizado
    }, []) 
    return {
        images,
        isLoading
    }
}
   //custom hooks : Ahorran el hacer codigo o logica de un componente y se pueden reutilizar en otros hooks
//! un hook es simplemente una funcion re retorna algo

