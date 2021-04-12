// express middleware t validate req.body 
function validation(schema) {
    return async(req, res, next)=>{
        try {
            //validate fucntion => request.body
               const reqbodyValidation = await schema.validate(req.body); 
            //    req.body = reqbodyValidation;
                next();
                //if  req.body not valid throw error
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