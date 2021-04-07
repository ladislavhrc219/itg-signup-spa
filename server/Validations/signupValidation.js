const yup = require('yup');


const  userSchema = yup.object({
    fullName: yup.string().required(),
    phoneNumber: yup.number().required(),
    email:  yup.string().email("Not valid email address").required(),
    age:  yup.number().typeError().min(18).max(99).required()   
})


module.exports = userSchema;