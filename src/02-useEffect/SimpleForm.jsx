import React from 'react'
import { Formik, useFormik } from 'formik'

export const SimpleForm = () => {
    const formik = useFormik({
        initialValues : {
            username : '',
            email : ''
        }
    })
    return (
            <form className='container' onSubmit={formik.handleSubmit}>
                <h1 className='h1 m-3'>Simple Form</h1>
                <input type="text" className='form-control m-3' 
                placeholder='Username' name='username' onChange={formik.handleChange} value={formik.values.username} />
                <input type="email" className='form-control m-3' 
                placeholder='example@gmail.com' name='email' onChange={formik.handleChange} value={formik.values.email}/>
            </form>
    )
}
