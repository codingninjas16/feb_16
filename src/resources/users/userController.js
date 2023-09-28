//create user
const { default: mongoose } = require("mongoose");
const { sendMessageAsJSON } = require("../../helper");
const userModel = require("./userModel")
const validator = require('validator');
require('dotenv').config();

module.exports.createUser = async function createUser(req,res){
    try {
        let {email,name,password,role} = req.body; //destructure

        //validation
    
        if(!email || !name || !password ){
    
           return  sendMessageAsJSON(res,402,false,"Required Fields Cannot Be Invalid");
        }
        if(! validator.isEmail(email) ){
    
            return  sendMessageAsJSON(res,402,false,"Email Is Not Valid");
        }
    
        if(! validator.isStrongPassword(password)){
           
            return  sendMessageAsJSON(res,402,false,"Password Is Weak !!");
        }
        if(!role){
            role = userModel.getDefaultRole();
        }
    
        if(!userModel.isValidRole(role))
        {
            return  sendMessageAsJSON(res,402,false,"Not A Valid Role !!");
        }
    
        //unique
    
        let data = await userModel.findOne({email:email});// null, [] ,[]
        
        if(data){
            return  sendMessageAsJSON(res,401,false,"Email id already exist");
        }
    
        let user = await userModel.create({
            email:email,
            password:password,
            name:name,
            role:role
        });
    
        return sendMessageAsJSON(res,200,true,"",user);
    
    } catch (error) {
        let errorMssg = "Internal Server Error";
        if(process.env.enviroment == "local"){
            errorMssg = error.message;
        }
        return  sendMessageAsJSON(res,500,false,errorMssg);
        
    }
    // extract
    //validate
    //create

}
// put --> user/12345
//create , read , update , delete
// update -->name,password,role, --> any one
// update 

module.exports.updateUser = async function updateUser(req,res){
    try {
        const {userId} = req.params;
    const {name,password,role} = req.body;
 // ! --> "",null,undefined,false,0,-0
    if(!userId || !mongoose.isValidObjectId(userId)){
        return sendMessageAsJSON(res,401,false,"id is not valid");
    }

    // error --> name , passowrd , role
    if(!name && !password && !role){
        return sendMessageAsJSON(res,403,false,"not any field to update");
    }

    if(role && !userModel.isValidRole(role))
    {
        return  sendMessageAsJSON(res,402,false,"Not A Valid Role !!");
    }

    let user = await userModel.findById(userId);
    
    if(!user){
        return sendMessageAsJSON(res,402,false,"not any user found for id");
    }

    if(name){
        user.name = name;
    }
    if(password){
        user.password = password;
    }
    if(role){
        user.role = role;
    }
    await user.save();

    return  sendMessageAsJSON(res,200,true,"",user);
        
    } catch (error) {
        let errorMssg = "Internal Server Error";
        if(process.env.enviroment == "local"){
            errorMssg = error.message;
        }
        return  sendMessageAsJSON(res,500,false,errorMssg);
        
    }
    //{extract , validate,update}
    


}