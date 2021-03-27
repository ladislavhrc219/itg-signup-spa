import React, {useState} from 'react';

import {useForm} from 'react-hook-form';
import './../../form-styles.scss';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    // fullName: yup.string().required()
    // .min(4, "Too Short!")
    // .max(30, "Too Long!")
    // .required("Full name is required"),
    email: yup.string().email()
    .required("Email is required"),
    
    // email: yup.string().email().required("Email is required"),

    //   age: yup.number().positive().nullable(false).min(18),
    // phoneNumber: yup.string()
    // .required("Phone number is required")
    // .matches(
    // /^([0]{44}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
    //     "Invalid phone number"
    // ),
    age: yup.number().required().typeError("Please enter a valid number").min(18, "Min age is ${min}").label("Age")
    });



export default function StepTwo( { setStep, formValues,setFormValues} ){


    const { register, handleSubmit, errors } = useForm({resolver: yupResolver(schema)});

    function onSubmit(values){
        setFormValues({
            ...formValues, 
            ...values
            
        });
        setStep(3);
        // setPrevStep(prevStep => setStep(prevStep(1)));
        // setPrevStep(prevStep(step => step - 1));
        
      console.log(values);


        // goToPreviousScreen();
       
    }


        


    return (

        <> 

<div className="heroicon" > 


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
</div>

            <h4> Step Two</h4>
     

          <form  onSubmit={handleSubmit(onSubmit) } 
        className="form-container"> 

            <div className="form-group"> 
            <label className="label"> Email</label> 
            <input 
            className="inputField"
            type="text"
             name="email" 
             placeholder="Email..."
             ref={register()} />
            </div>
            {/* className="error" */}
            {errors.email && <p className="error"> {errors.email.message} </p>}
    
            <div className="form-group"> 
            <label className="label"> Age</label>
            <input 
                    className="inputField"
                    type="age" 
                    name="age" 
                    placeholder="Age" 
                    // ref={register ({required:true, min:18})}
                    ref={register({min: 18, message: "too young for this game..."})} 
                    />
                  {errors.age && <p className="error"> {errors.age.message} </p>}
                  {/* {errors.age?.message} */}
              </div>


              <div> 

            
            {/* <button 
            className="submitButton"
            type="submit"> 
            NEXT  
            
             </button> */}
<button 
            className="arrowButton"
            type="submit"> 
            
<svg className="arrow-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>
            
             </button>


            </div>

              {/* <div 
                className="submitButton" 
                type="submit"> 
                Next
            </div> */}
        {/* <button onClick={handleSubmit(onClick)} type="submit" > Previos screen </button> */}

        </form>



        {/* <button onClick={() => showPrevStep(setPrevStep())}> Prev </button> */}

        </>
            
    )

}