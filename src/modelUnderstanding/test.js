const mongoose = require('mongoose');
require('dotenv').config();
const userModel =require('./userModel');
//create --> model.create(obj) --> await
async function insertData(data,model){
    try{
        await model.create(data);//promise
        console.log('data-created');
    }catch(err){
        console.log('error',err);
    }
}   


let data = {
    name:'vikas',
    age:140,
    email:'a12@gmail.com',
    subject:['eng','hin']
};
async function init(){
    await  mongoose.connect(process.env.mongoDBURL);
    read();
    return 'ok';
}
//create 
//delete --
//update 
//read

async function read(){
    try {
        //let data =  await userModel.findById('65048e16ab61640036bf358f');
        let data = await userModel.findOne({name:'vikas-singh',batch:'B'});//return []
        console.log('data',data);   
    } catch (error) {
        console.log('error',error);
    }
   
}

init();