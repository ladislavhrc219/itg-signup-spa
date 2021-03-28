import './App.css';
import React from 'react';
// import Validation from './form-comps/Validation.js';
import Form from './form-comps/Form.js'
import "./form-styles.scss";

function App() {
  return (
    <div className="App">
      <div className="background" > 
        
       </div>
      <header className="App-header">
    {/* <Validation/> */}
        <p>
         ITG User Account
        </p>

        <Form/>
        

        <p> <svg className="heroicon-18" height="35" width="35" viewBox="0 0 512 512" 
         xmlns="http://www.w3.org/2000/svg" 
         id="fi_2534625"><circle cx="256" cy="256" 
         fill="#f05555" r="240"></circle><path 
         d="m425.706 86.294c-.1-.1-.195-.188-.292-.284l-339.4 339.4c.1.1.188.195.284.292 93.726 93.725 245.686 93.725 339.412 0s93.721-245.682-.004-339.408z" fill="#e13741"></path>
         <circle cx="256" cy="256" fill="#d7e6e6" r="176"></circle>
         <path d="m40 268a12 12 0 0 1 -12-12 228 228 0 0 1 228-228 12 12 0 0 1 0 24c-112.486 0-204 91.514-204 204a12 12 0 0 1 -12 12z" fill="#ff7373"></path><g fill="#3c3c3c"><path d="m160 352a16 16 0 0 1 -16-16v-160a16 16 0 0 1 32 0v160a16 16 0 0 1 -16 16z"></path>
        <path d="m304 205.333a48 48 0 1 0 -83.739 32 47.806 47.806 0 0 0 -12.261 32v37.334a48 48 0 0 0 96 0v-37.334a47.806 47.806 0 0 0 -12.261-32 47.8 47.8 0 0 0 12.261-32zm-48-16a16 16 0 1 1 -16 16 16.019 16.019 0 0 1 16-16zm16 117.334a16 16 0 0 1 -32 0v-37.334a16 16 0 1 1 32 0z"></path><path d="m384 240h-8v-8a16 16 0 0 0 -32 0v8h-8a16 16 0 0 0 0 32h8v8a16 16 0 0 0 32 0v-8h8a16 16 0 0 0 0-32z"></path></g></svg> 
    </p>
        <h3> You must be 18 or over </h3>

        <p>
         By signing up, you agree to our 
         <br/> 
         Terms, Data Policy 
         and Cookies Policy.
        </p>
        
      </header>
    </div>
  );
}

export default App;
