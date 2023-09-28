const mongoose = require('mongoose');
require('dotenv').config();
const userModel =require('./userModel');
const classModel =require('./classModel');
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
    name:'vishal',
    age:140,
    email:'a20@gmail.com',
    subject:['eng','hin'],
    class:'650c5769b65ba65b70d984e0'
};
let classData = {
    name:'class1',
    total_strength:40,
    class_teacher:'shashank',
    student:['650c57ac3286894e8158e12e','650c53e7d3a8a3e68306e58a']
};
async function init(){
    console.log('process',process.env.mongoDBURL);
    await  mongoose.connect('mongodb+srv://singh99vikas:Mongoose@cluster0.snh5a.mongodb.net/test_db');
    read();

}
//create 
//delete --
//update 
//read//user with age of 40 and name should either be vikas or vikas1
//age = 40 AND (NAME = 'VIKAS' OR NAME = 'VIKAS1')
//age = 40 AND (NAME IN ('VIKAS','VIKAS1'))

async function read(){
    try {
        //let data =  await userModel.findById('65048e16ab61640036bf358f');
        //let data = await userModel.find({$or : [{email:'a12@gmail.com'},{name:'vikas1'}]});//return []
        //let data = await userModel.findOne({email:'a20@gmail.com'}).populate('class');// null
        let classData = await classModel.findOne({name:'class1'}).populate('student');
        console.log('classData',classData);
        // let data = await userModel.find({$and: [
        //     { age: 40 },
        //     {
        //       $or: [
        //         { name: "vikas" },
        //         { name: "vikas1" }
        //       ]
        //     }
        //   ]})
        // model.find({email:'A})
        console.log('data',data);   
    } catch (error) {
        console.log('error',error);
    }
   
}

async function update()
{
    //
    // let data = await  userModel.find({age:140}); //[]
    // //update
    // for(let i = 0;i< data.length;i++){
    //     data[i]['age'] = 150;
    //     await data[i].save();
    // }
    let data = await userModel.findOneAndUpdate({age:150},{$set:{age:160}});
    //await data.save();
    console.log('update data');
}

async function deleteData()
{
    let data = await userModel.remove({age:'160'});
    console.log('deleting');

}

//name = "vikas" || "vishal"
// in : ['vikas','vishal]
// _id --> ObjectId
//model.findById(id) 
//model.find({_id:id}) --> []
//model.findOne({_id:id}) --> obj

init();
//backend api --> data --> user
//controller 
//controoler -->
//create
//read
//update
//delete
//api


//model
//controller
//router