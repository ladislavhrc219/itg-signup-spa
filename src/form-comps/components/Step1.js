import React from 'react';

import {useForm} from 'react-hook-form';

import './../../form-styles.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import "yup-phone";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
    fullName: yup.string().required()
    // .min(4, "Too Short!")
    .required("Full name is required"),
    
    // email: yup.string().email().required("Email is required"),

    //   age: yup.number().positive().min(18),
    phoneNumber: yup.string()
    .required("Phone number is required")
    .matches(phoneRegExp, 'Please enter a valid phone number')

    // phoneNumber: yup.string().
    // .matches(
    // /^([]{44}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
    //     "Invalid phone number")
        // ,
    // age: yup.number().required().min(18, "Min age is ${min}").label("Age")
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


    // useEffect prevStep





    return (
        <> 


        {/* <h2>  Enter your details below  </h2> */}
        

        <div className="heroicon" > 


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </div>

        <h4> Step One</h4>

        <form  onSubmit={handleSubmit(onSubmit) } 
        className="form-container"> 
        
        <div className="form-group"> 
        <label className="label"> 
        
{/* <svg className="inputicon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg> */}
          Full Name </label>
        <input className="inputField" type="text" name="fullName" placeholder="Your full name..." 
      ref={register()} /> 
      
       
           {errors.fullName && <p className="error"> {errors.fullName.message}</p>} 
           </div>



           <div className="form-group"> 
        <label className="label"> Phone number </label>
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
            
<svg className="arrow-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
            
             </button>
            </div>

            {/* <button  > Prev Step</button> */}

         </form>


         </>
    )

}