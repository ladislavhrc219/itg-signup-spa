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
           <div className="confirm-container">        

           <p> <svg className="heroicon-userInfo"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg></p>


{/* <svg className="heroicon-userInfo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> */}
           <h1> User  information </h1>


            {/* <pre> {JSON.stringify(formValues)} </pre> */}

            <h3> See your details below</h3>

                <form  onSubmit={handleSubmit(onSubmit) } 
                className="form-container"> 

                    
                   



                    

                    <h4>  Username: 
                       <span className="userDetails"> {formValues.fullName}   </span>  
                        
                          </h4>
                    <h4>  Phone number:  
                        <span className="userDetails">     {formValues.phoneNumber}    </span>
                     
                        </h4>

                    <h4>  Email: 
                      <span className="userDetails">    {formValues.email}   </span> 
                           </h4>

                    <h4>  Age: 
                   <span className="userDetails">      {formValues.age}   </span> 
                          </h4>

                    

                <div> 
                            <button 
                            className="submitButton"
                            type="submit"> 

                            Submit  
                            
                            </button>
                </div>

                </form>


                </div>



        </>

    )

}