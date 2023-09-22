const mongoose = require('mongoose');


//email, name ,age ,batch
//age --> 12 ,3 ,17 Number, 
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        requried:true,
        unique:true
    },
    name:{
        type:String,
        minLength:2
    },
    age:{
        type:Number,
        requried:true,
        min:1
    },
    batch:{
        type:String,
        enum:['A','B','C'],
        default:'A'
    },
    subject:{
        type:[String]
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'class'
    }
},{
    timestamps:true
});
//users
const userModel = mongoose.model('user',UserSchema);

module.exports = userModel;