function validation(schema) {
    return async(req, res, next)=>{
        try {
            //validate fucntion => request body
               const reqbodyValidation = await schema.validate(req.body); //if req valid, got to next();
               req.body = reqbodyValidation;
                next();
        }
        catch(err){
            return res.status(400).json({err});
            // const notValid = res.status(400).json(err);
            // console.log(notValid);
            // return (notValid);
        }
    }
}
module.exports = validation;


// const validation = (schema) => async (req, res, next) => {
//     const body = req.body;
//     try{
//         await schema.validate(body);
//         next();
//         return next();
//     } catch(err) {
//         return res.status(400).json({err});
//     }
// };