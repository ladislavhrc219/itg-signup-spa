// import React from 'react';
// import {shallow} from 'enzyme';
// import {Step1} from './../form-comps/components/Step1';
// import {UserInfo} from './../form-comps/components/UserInfo';

// describe('<Step1/>', () => {
//     it('has an input field', () => {
//         let wrapper = shallow(<Step1/>)
//         const input = wrapper.find('.inputField')
//         expect(input.props().value).toBe(undefined)
//     })


//     it('test arrow button'),()=>{
//         let wrapper = shallow(<Step1/>)
//         const button = <button>  <svg className="arrow-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
//         </svg> </button>
//         expect(wrapper.containsMatchingElement(button)).toBe(true);
//     }
// })

// describe ('<UserInfo/>', () => {
//     it('testing Submit button'),()=>{
//         let wrapper = shallow(<UserInfo/>)
//         const button = <button> submit </button>
//         expect(wrapper.containsMatchingElement(button)).toBe(true);
//     }
// })



// // Jest encountered an unexpected token
// // This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
// // By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".