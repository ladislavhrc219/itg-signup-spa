import React, {useEffect} from 'react';

import {useForm} from 'react-hook-form';
import './../../form-styles.scss';


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    age: yup.number().required().typeError("Please enter a valid number").min(18, "Min age is ${min}").label("Age")
    });

export default function StepTwo( {setStep, formValues,setFormValues} ){
    const { register, handleSubmit, errors } = useForm({resolver: yupResolver(schema)});
  
    function onSubmit(values){
        setFormValues({
            ...formValues, 
            ...values
        });
        setStep(3);

        // const boo = useEffect(()=>{


        // })
      console.log(values);
    }

    

    const handleClick = (e) =>{
      e.preventDefault();
        setStep(1)       
      }

     

    return (
        <> 
                <div className="heroicon" > 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                </div>
            <h4> Step Two</h4>
            {/* GO back arrow */}
            <button 
            className="arrowButton-back"
            type="button" 
            onClick={handleClick}>  
              <svg className="arrow-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
</svg>
           </button>
       
          <form  onSubmit={handleSubmit(onSubmit) } 
        className="form-container"> 
            <div className="form-group"> 
            <label className="label"> Email Address</label> 
            <input className="inputField"
            type="text"
             name="email" 
             placeholder="Your Email..."
             ref={register()} />
            </div>
            {errors.email && <p className="email-error"> {errors.email.message} </p>}
    
            <div className="form-group"> 
            <label className="label"> Age</label>
            <input 
                    className="inputField"
                    type="number" 
                    name="age" 
                    placeholder="Age" 
                    // ref={register ({required:true, min:18})}
                    ref={register()} 
                    />
                  {errors.age && <p className="error"> {errors.age.message} </p>}
                  {/* {errors.age?.message} */}
              </div>
              <div> 
           <button 
            className="arrowButton"
            type="submit"> 
            {/* single arow */}
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