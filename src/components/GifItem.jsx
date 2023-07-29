import React from "react";

export const GifItem = ({ title,url }) => {

const link = url.url

return (
    <section className="p-5 md:p-2 lg:p-4 " >
        <li className="grid justify-center p-4 shadow-md rounded-2xl bg-neutral-900-700 h-96 md:h-96 shadow-slate-400 " >
            <img className="object-cover h-72" src={link} alt={title} />
            <p className="text-zinc-300" >{title}</p>
        </li>
    </section>
)};
