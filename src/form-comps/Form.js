import React, { useState} from 'react'
import './../form-styles.scss';

import StepOne from "./components/Step1";
import StepTwo from "./components/Step2";
import UserInfo from "./components/UserInfo";
import UserSummary from './components/UserSummary';


export default function Form() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState([]);
 
  return (
    <div>

     {/* Passing down setStep, formValues, setFormValues */}
        {step === 1 && (<StepOne 
        setStep={setStep} 
        formValues={formValues} 
        setFormValues={setFormValues}/>
         )}

        {step === 2 && (<StepTwo
        setStep={setStep} 
        formValues={formValues} 
        setFormValues={setFormValues}
        />
         )}
      
       {step === 3 && (<UserInfo
        setStep={setStep} 
        formValues={formValues} 
        setFormValues={setFormValues}
        />
         )}

        {step === 4 && (<UserSummary/>
         )}
      </div>
  )
}





// import React from 'react'
// import {useForm} from 'react-hook-form';
// import './../styles.scss';
// import { userSchema } from './UserValidation';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";


// const schema = yup.object().shape({
//   fullName: yup.string().required()
//   .min(5, "Too Short!")
//   .max(30, "Too Long!")
//   .required("Full name is required"),
  
//   email: yup.string().email().required("Email is required"),

// //   age: yup.number().positive().min(18),
//   phoneNumber: yup.string()
//   .required("Phone number is required")
//   .matches(
// /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
//     "Invalid phone number"
//   ),
//   age: yup.number().required().min(18, "Min age is ${min}").label("Age")
// });


// export default function Form () {
   
//     const { register, 
//       handleSubmit, 
//       errors, 
//       isValid } = useForm({
//         resolver: yupResolver(schema)
//       });

//     const createUserProfile = async (e)=>{
//         e.preventDefault();
//         let userData = {
//             name: e.target[0].value,
//             email: e.target[1].value,
//             password: e.target[2].value,
//             age: e.target[3].value,
//         };
//         const isValid = await userSchema.isValid(userData);
//         console.log(isValid);

//     };

//     const onSubmit = (userData) => {
//         console.log(userData)
//     }    

//         return (
//             <div className="contianer-hook-form">
//                 <form className="simple-hook-form" 
//                 // onSubmit={handleSubmit(onSubmit)}
//                 onSubmit={handleSubmit(createUserProfile)}
//                 >
              
//      <label> Full Name</label>

//      <input type="text" name="fullName" ref={register()}/>
//     {errors.fullName && <p> {errors.fullName.message} </p> }
//                 {/* <input 
//                 type="name" 
//                 name="fullName" 
//                 placeholder="Full name..." 
//                 ref={register({required: true,  minLength:4})}
//                 />
//                 {errors.name && <p> Name cannot be blank...</p>} 
//                  */}
              
//      <label> Email</label>
//                 <input 
//                 type="text" 
//                 placeholder="Email" 
//                 name="email"
//                 ref={register()} //tracking the changes 
//                 />
//                 {/* {errors.email && errors.email.message} */}
//                 {errors.email?.message}


//     {/* <label> Password</label>
//                 <input 
//                 type="password"
//                 placeholder="Password" 
//                 name="password"
//                 // ref={register} //tracking the changes 
//                 ref={register()} //tracking the changes 
//                 /> 
//                 {errors.password && <p> {errors.password.message}</p>} */}

//      <label> Age</label>
   

//                 <input 
//                 type="age" 
//                 name="age" 
//                 placeholder="Age" 
//                 // ref={register ({required:true, min:18})}
//                 ref={register({message: "too young for this game..."})} 
//                 />
//               {/* {errors.age && <p> {errors.age.message} </p>} */}
//               {errors.age?.message}


//         {/* <label> Phone number </label>
//         <input
//         type="number"
//         name='phoneNumber'
//         placeholder="Phone number"
//         ref={register()}
//         />
//           {errors.phoneNumber && <p> {errors.phoneNumber.message} </p>} */}

//                 <input 
//                 //disabled is the form is not valid
//                 disabled={isValid}
//                 // onSubmit={()}
//                 type="submit"/>

//                 </form>
                
//             </div>
//         )
    
// }

































// VERY FREAK FROM





// // newForm
// import React, {useState} from 'react'
// import {useForm} from 'react-hook-form';
// import './../styles.scss';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// // interface FormData {
// //   name: "Jane",
// //   phone: "03524t3534t",
// //   email:"string@gmail.com",
// //   dob: 1234
// // }

// const schema = yup.object().shape({
//   name: yup.string().required()
//   .min(5, "Too Short!")
//   .max(30, "Too Long!")
//   .required("Full name is required"),
//   email: yup.string().email().required("Email is required"),
//   phoneNumber: yup.string()
//   .required("Phone number is required")
//   .matches(
// /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
//     "Invalid phone number"
//   ),
//   age: yup.number().required().min(18, "Min age is ${min}").label("Age"), 
//   date: yup.string().required()
//   .min(2000)
  
// });

// export default function Form() {
  
//   const defaultValues = "";

//   const { register, 
//     handleSubmit, 
//     errors, 
//     isValid } = useForm({
//       resolver: yupResolver(schema), 
//       defaultValues: {
//         name: "joe", 
//         email: "joe@gmail.com", 
//         phoneNumber: "123", 
//         age: "23"
//       }
//     });
//     // const {register, handleSubmit, errors } = useForm({schema});
  
    
//     // console.log(defaultValues, "data");

//     const [submitting, setSubmitting] = useState(false);

//   return (
//     <div>
//       <h2> New form</h2>


//       <form onSubmit={handleSubmit((FormData)=>{
//         setSubmitting(true);
        
//         console.log(FormData);

//         setSubmitting(false);

//       })}>
//       <div className="form-container"> 
        
//       {/* apply ref, call to the register function, tie it together with the hook  */}
//       <input type="text" name="name" placeholder="Name..." 
//       ref={register({required: true,  minLength:4})} /> 
//        {errors.name ? <p> Name cannot be blank...</p> : null} 


//       {/* <input type="number" name="phone" placeholder="Phone number..." 
//       ref={register()} /> */}
//       <label>
//         Phone Number
//       </label>
//         <input
//           type="text"
//           name="phoneNumber"
//           ref={register({ required: true, minLength: 12 })}
//         />


     

//       {/* <input type="text" name="email" placeholder="Email..." 
//       ref={register()} /> */}
//        <label> Email</label>
//                <input 
//                 type="text" 
//                 placeholder="Email" 
//                 name="email"
//                 ref={register()} //tracking the changes 
//                 />
//                 {/* {errors.email && errors.email.message} */}
//                 {errors.email?.message}

//       {/* <input type="text" name="age" placeholder="Date of birth..." 
//       ref={register({required: true, message: "too young for this game..."})} 
      
//       />
//       {errors.age && <p> {errors.age.message} </p>} */}
 
//  {/* <label> DOB </label>
// <input
//  name="date"
//  type="date"
//  max={moment().format("YYYY-MM-DD")}
//  ref={register({ required: true })}
// />
// {errors.dob?.message} */}


//     {/* {errors.dob?.message ? <p> Age cannot be blank...</p> : null} */}
//      {/* <div className="invalid-feedback">{errors.dob?.message}</div> */}

// <input 
//                 type="age" 
//                 name="age" 
//                 placeholder="Age.." 
//                 // ref={register ({required: true, min: 18})}
//                 // ref={register ({required:true, min:{value:18}})}
//                 ref={register ({required:true
                 
//                             })}
//                 ref={register({ required: true, min: 18,  message: "too young for this game..."})} 
//                 />
//               {/* {errors.dob && <p> Min Age is 18</p>} */}
//               {errors.age?.message}

//       {/* <input className="submitButton" type="submit" value="submit" onSubmit={handleSubmit()}/> */}

//       <input 
//                 //disabled is the form is not valid
//                 disabled={!isValid}
//                 type="submit"/>
//       </div>

    
        
//         </form> 




//     </div>
//   )
// }

// FREAK FORM ABOVE 
