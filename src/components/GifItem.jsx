import React from "react";

import PropTypes from 'prop-types'; 

export const GifItem = ({ title,url }) => {

return (
    <section className="p-5 md:p-2 lg:p-4 " >
        <li className="grid items-center content-center justify-center w-full p-4 overflow-hidden shadow-md rounded-2xl bg-neutral-900-700 h-96 md:h-96 shadow-slate-400 " >
            <img className="object-cover w-full h-72" src={url.url} alt={title} />
            <p className="text-zinc-300" >{title}</p>
        </li>
    </section>
)};

GifItem.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
}

