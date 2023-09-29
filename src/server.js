const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./config');//db
const mongoose = require('mongoose');
const { sendMessageAsJSON } = require('./helper');
const morgan = require('morgan');
require('dotenv').config();

const PORT = 8000;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));//content-type:urlencode
app.use(bodyParser.json());//req.body //content-type : application/json
console.log('process',process.env.enviroment);
if(process.env.enviroment == 'local'){
    app.use(morgan('dev'));
}

//req,res --> 



app.use('/user',(req,res,next) =>{
    // user/create
    //write a function to get role
    let role = req.body.role;
    console.log('role',role);
    if(role == 'A'){
        req.isAdmin = true;
    }else{
        req.isAdmin = false;
    } 
    next();
});

app.use('/',require('./router/index'));

app.all('/*',function (req,res){
    return res.send('error 404');
})

module.exports.startServer = async function startServer(){
    try {
        await  mongoose.connect(process.env.mongoDBURL);
        console.log('database-connection-sucess');
        app.listen(PORT,function listenPort(err,data){
            if(err){
                console.log(`error occur ${err}`);
                return;
            }
            console.log(`hello server started successfully at ${process.env.enviroment} enviroment PORT ${PORT}`);
        });

    } catch (error) {
        console.log('error',error);
    }
}
