import React, { useState, useRef } from "react";
import { AddCategory } from "./components";
import GifGrid from "./components/GifGrid";

export default function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    const categoryExists = categories.find(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    );
    if (categoryExists) {
      return;
    }
    //pasamos newCategory como argumento de la funcion
    setCategories([ newCategory,...categories ]);
    //y la pasamos a nuestra funcion para cambiar el estado de la lista con el event enviado desde AddCategory
  };
  //la funcion tambine almacena el valor de la variable
  return (
    <>
      <section className="flex flex-col justify-center" >
        <h1 className="flex justify-center m-4 text-4xl sm:text-7xl text-neutral-200">Gif Expert App</h1>

        <AddCategory
          onNewCategory={onAddCategory}
          //mandamos una prop onNewCategory que manda la funcion onAddCategory
          //le llega el value mediante un event al prop y lo recibimos como newCategory
          //setCategories = { setCategories }
        />
          {categories.map((category) => (
            <GifGrid key={ category } 
            category = { category } />
          ))}
      </section>
    </>
  );
}
