//connection 
//mongoose

//mongo db --> select * from table where id = 10;
//mongoose --> .findById()


const mongoose = require('mongoose');
require('dotenv').config();


async function connectToMongoDB(){
    try {
        const db =await  mongoose.connect(process.env.mongoDBURL1);
        console.log('connected -succesfully');  
    } catch (error) {
        console.log('errror',error);
    }
}

connectToMongoDB();

module.exports = mongoose;

