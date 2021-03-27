import './App.css';
import React from 'react';
// import Validation from './form-comps/Validation.js';
import Form from './form-comps/Form.jsx'
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

        <p>
         By signing up, you agree to our Terms, Data Policy 
         and Cookies Policy.
        </p>
        
      </header>
    </div>
  );
}

export default App;
