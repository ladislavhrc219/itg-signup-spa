import * as yup from 'yup';

// export const schema = yup.object().shape({
//   fullName: yup.string().required()
//   .min(5, "Too Short!")
//   .max(30, "Too Long!")
//   .required("Full name is required"),
  
//   email: yup.string().email().required("Email is required"),
// //   password: yup.string().required(),
//   password: yup.string()
//     .required("Password is required")
//     .min(6, "Password is too short - should be 6 chars minimum"),
// //   age: yup.number().positive().min(18),
//   phoneNumber: yup.string()
//   .required("Phone number is required")
//   .matches(
// /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
//     "Invalid phone number"
//   ),
//   age: yup.number().required().min(18, "Min age is ${min}").label("Age")
// });

// export const schema;

//  now use Yup schemas AFTsER you defined your custom dictionary
 export const userSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().min(18),
    email: yup.string().email(),
   
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });