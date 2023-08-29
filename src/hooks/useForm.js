import { useState } from "react"


export const useForm = (initialForm = {}) => {
    //el parametro recibe un objeto, pero a su vez este parametro puede ser usado para resetear el estado al original
    const [formState, setFormState] = useState(initialForm)
    //el parametro a su vez lo pasamos como estado inicial del useState 

    const onInputChange = ({ target }) => {
            const { name,value } = target
            setFormState({
            ...formState,
            [ name ]: value
            })
        }
    const onResetForm = () => {
            setFormState(initialForm)
            //
        }

/*agarra el name del input que esta cambiando, y accede al valor interno de este, por eso los corchetes, entonces le asignamos que el nuevo valor de la propiedad interna del name que cambio es el value que yo estoy ingresando en el input */

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
