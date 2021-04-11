import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';

import {render, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';

import Step1 from '../form-comps/components/Step1';

test('it shpuld validate length', async ()=> {
    //find diff elements on the page page
    const {findByLabelText, findByText, findByRole} = render(<Step1 />); //render out component 

    const input = await findByLabelText("Full Name");

    await act( async ()=> { 

        fireEvent.input(input, {target: {value: "abdfg"} }); 
        fireEvent.submit(await findByRole("button"));

    })


});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


// y