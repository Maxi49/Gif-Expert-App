import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


function GifGrid({ category }) {
    const { images,isLoading } = useFetchGifs( category );
    //! nunca poner la creacion de una funcion dentro de un componente
    return (
    <section className="flex flex-col justify-center m-0 mb-16 list-none " >
        <h3 className="flex justify-center m-16 text-5xl text-gray-200" >{category}</h3>
        {
            isLoading && ( <h2>Loading...</h2> )
        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                { images.map(image => (
                    <GifItem key={ image.id }
                        { ...image }
                        //!spread de propiedades 
                    />
                ))}
        </div>
    </section>
    );
}

GifGrid.propTypes = {};

export default GifGrid;
