import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
  
export default function Confirmation( {setStep, formValues,setFormValues} ){


   
    const { handleSubmit } = useForm();

    // useEffect(()=>{ console.log("using effect")})
    useEffect(()=>{ 
        window.localStorage.setItem("formValue", JSON.stringify(formValues))
        console.log("using effect")
    }, [formValues]);


    function onSubmit(values){
        setFormValues({
            ...formValues, 
            ...values,
        });
        setStep(4);
        // setPrevStep(2)
      console.log(values);
    }

    // const onSubmit=(values)=>{ console.log(values); }

    return (


        <>
           
           <h1> User  information </h1>
            {/* <pre> {JSON.stringify(formValues)} </pre> */}

            <h3> See your details below</h3>

                <form  onSubmit={handleSubmit(onSubmit) } 
                className="form-container"> 

                    
                   



                    

                    <p>  Username: 
                       <span className="userDetails"> {formValues.fullName}   </span>  
                          </p>
                    <p>  Phone number:  
                        <span className="userDetails">     {formValues.phoneNumber}    </span>
                     
                        </p>
                    <p>  Email: 
                      <span className="userDetails">    {formValues.email}   </span> 
                           </p>
                    <p>  Age: 
                   <span className="userDetails">      {formValues.age}   </span> 
                          </p>

                    

                <div> 
                            <button 
                            className="submitButton"
                            type="submit"> 

                            Submit  
                            
                            </button>
                </div>

                </form>



        </>

    )

}