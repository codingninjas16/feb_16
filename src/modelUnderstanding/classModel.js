const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    total_strength:{
        type:Number,
        min: 0 ,
        required:true
    },
    class_teacher:String,
    student:{
        type:[mongoose.Schema.Types.ObjectId],
        'ref':'user'
    },
    
},
    {
     timestamps:true
    }
);

const clasModel = mongoose.model('class',ClassSchema);

module.exports = clasModel;