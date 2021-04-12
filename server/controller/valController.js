class ValidationController{
    //handle req:
    passRequest(req, res){
        console.log(JSON.stringify(req.body));

        res.json('res: req passed..')
    }
}

module.exports = new ValidationController();