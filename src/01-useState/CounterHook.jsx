import React, { useState } from 'react'
import { ErrorMessage, Field, Formik, useFormik } from 'formik'
import { Col,Form,Button,FloatingLabel,Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup'

export const CounterHook = () => {
    const [errorExist, setErrorExist] = useState(false)
    const [sendForm, setSendForm] = useState(false)
    const [counter, setCounter] = useState(0)
    const [buttonValue, setButtonValue] = useState({buttonValueIncrement : `+${1}`,buttonValueDecrement : `-${1}`})
    const [userCustomValue, setCustomValue] = useState({customIncrement : '',customDecrement: ''})
    const handleIncrement = () => {
        if(!(counter + 1 > 1000 || counter + userCustomValue.customIncrement > 1000)){
            userCustomValue.customIncrement 
            ? setCounter(counter + userCustomValue.customIncrement)
            : setCounter(counter + 1)
        }
    }
    const handleDecrement = () => {
        if(!(counter - counter < 0 || counter - userCustomValue.customDecrement <= 0)){
            userCustomValue.customDecrement
            ? setCounter(counter - userCustomValue.customDecrement)
            : setCounter(counter - 1)
        }
    }
    const handleReset = () => {
        setCounter(0)
    }
    
    
        return(
        <>
            <div className='h1 m-3'>{counter}</div>
            <Button onClick={handleIncrement} >increment : {buttonValue.buttonValueIncrement}</Button>
            <Button onClick={handleDecrement} >increment : {buttonValue.buttonValueDecrement}</Button>
            <Button onClick={handleReset} >resetear</Button>
            <Formik
                initialValues={{
                    customValue: ''
                }}
                validate={(values) => {
                    const submitter = document.activeElement;
                    let errores = {};
                    if(submitter.name !== 'resetButton'){
                        if (!values.customValue ) {
                            setErrorExist(true);
                            errores.customValue = "Porfavor ingresa un numero mayor a 0 y menor a 500";
                        } else if (!/^[0-9]+$/.test(values.customValue)) {
                            setErrorExist(true);
                            errores.customValue =
                            "No esta permitido ingresar letras o caracteres especiales, solo numeros";
                        } else if (values.customValue < 0) {
                            setErrorExist(true);
                            errores.customValue = "The value has to be greater than 0";
                        
                        } else if (values.customValue > 500) {
                            setErrorExist(true);
                            errores.customValue = "The value has to be less or equal than 500";
                        }
                        setTimeout(() => setErrorExist(false), 1000);
                        return errores;
                    }
                    }}
                onSubmit={(values, { resetForm }) => {
                    
                    setSendForm(true);
                    const submitter = document.activeElement;
                    if (submitter.name === "incrementButton") {
                        console.log(parseInt(values.customValue));
                        setCustomValue({
                        ...userCustomValue,
                        customIncrement: parseInt(values.customValue),
                        });
                        setButtonValue({
                        ...buttonValue,
                        buttonValueIncrement: `+${values.customValue}`,
                        });
                    } else if (submitter.name === "decrementButton") {
                        console.log('hola')
                        setCustomValue({
                        ...userCustomValue,
                        customDecrement: parseInt(values.customValue),
                        });
                        setButtonValue({
                        ...buttonValue,
                        buttonValueDecrement: `-${values.customValue}`,
                        });

                    } 
                    else if (submitter.name == 'resetButton') {
                        setButtonValue({buttonValueIncrement : `+${1}`,buttonValueDecrement : `-${1}`})
                        setCustomValue({customIncrement : '',customDecrement: ''})
                    }
                    setTimeout(() => setSendForm(false),3000)
                    resetForm();
                    }}                  
            >
                {({values,errors,handleChange,handleSubmit}) => (
                    <Form className='formulario' onSubmit={handleSubmit} >
                        <div>
                            <label className='h1 mt-3 ' htmlFor="customValue">Custom Value</label>
                            <Form.Control 
                            type='text'
                            id='customValue'
                            name='customValue'
                            placeholder='Escribe tu custom value'
                            onChange={handleChange}
                            value={values.customValue}
                            />
                            <ErrorMessage name='customValue' component={() => (<Alert variant='danger' className='mt-3'>{ errorExist && errors.customValue }</Alert>)} ></ErrorMessage>
                            <Form.Text id='Custom Value Help'> The custom value cannot contain words or any type of special characters, you can only use numbers. The custom value has to be greater than 0 but less than 500 </Form.Text>
                        </div>
                        <Button type='submit' name='incrementButton' >Aplicar para incrementar</Button>
                        <Button type='submit' name='resetButton'>resetear valor</Button>
                        <Button type='submit' name='decrementButton' >Aplicar para decrementar</Button>
                        {sendForm && <Alert variant='success'>Custom Value Aplicado</Alert>}
                    </Form>
                )}

            </Formik>
        </>
        )
}