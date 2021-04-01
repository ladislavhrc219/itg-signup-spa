import React from 'react';
import Axios from 'axios';
import {useForm} from 'react-hook-form';

import './../../form-styles.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
        fullName: yup.string().required()
        .required("Full name is required"),
        phoneNumber: yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, 'Please enter a valid phone number')
        });


export default function StepOne({setStep, formValues, setFormValues}){

 
const { register, handleSubmit, errors } = useForm({resolver: yupResolver(schema)});

  function onSubmit(values){
      setFormValues({
          ...formValues, 
          ...values,
      });
      setStep(2);
    console.log(values);
    }


    return (
        <> 


        {/* <h2>  Enter your details below  </h2> */}
        

        <div className="heroicon" > 


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </div>

        <h4> STEP 1 OF 2</h4>
        
        <h3> Please fill in your details... </h3>

        <form  onSubmit={handleSubmit(onSubmit) } 
        className="form-container"> 
        
        <div className="form-group"> 
        <label className="label">    Full Name </label>
        <input 
        className="inputField" 
        type="text" 
        name="fullName" 
        placeholder="Your full name..." 
        ref={register()} /> 
      
       
           {errors.fullName && <p className="error"> {errors.fullName.message}</p>} 
           </div>



           <div className="form-group"> 
        <label className="label"> Phone Number </label>
        <input
        className="inputField"
        type="number"
        name='phoneNumber'
        placeholder="Phone number..."
        ref={register()}
        /> 
        {errors.phoneNumber && <p className="error"> {errors.phoneNumber.message} </p>}

        </div>

            <div> 

         
            <button 
            className="arrowButton"
            type="submit"> 
            
            {/* single arrow */}
            {/* <svg className="arrow-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg> */}

            <svg className="arrow-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            
             </button>
            </div>

         </form>


         </>
    )

}