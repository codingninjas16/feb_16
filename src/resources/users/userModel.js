const mongoose = require('mongoose');

const rolesArray = ['A','S','T'];
const DefaultRoleValue = "T";
const UserSchema = new mongoose.Schema({
    email:{
      type:String,
      unique:true,
      required:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true 
    },
    role:{
        type:String,
        enum:rolesArray,
        default:DefaultRoleValue
    }
},
    {
        timestamps:true
    }
);
//'S'
UserSchema.statics.isValidRole = function isValidRole(role){
    return rolesArray.indexOf(role) >=0 ;
}
UserSchema.statics.getDefaultRole = function getDefaultRole(){
    return DefaultRoleValue;
}


const userModel = mongoose.model('user',UserSchema);

module.exports = userModel;