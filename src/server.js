const express = require('express');
const doctorRoute = require('./router/doctor');
const patientRoute = require("./router/patient");
const bodyParser = require('body-parser');
const { getFilePath, replaceString, getWriteFilePath, getCSSPath } = require('./helper');
const fs = require('fs/promises');
// const db = require('./config');//db
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const PORT = 8000;

const app = express();

app.use('/',bodyParser.urlencoded({extended:true}));//content-type:urlencode
app.use('/',bodyParser.json());//req.body //content-type : application/json

//req,res --> 

app.post('/resume',async function (req,res){
    const {template_id,first_name,last_name} = req.body;

    const readFilePath = getFilePath(template_id);
    const writeFilePath = getWriteFilePath(template_id);

    try {
        const data = await fs.readFile(readFilePath, "utf-8");
        //replace
        const updatedValue = replaceString(data,
            {
                first_name:first_name,
                last_name:last_name,
                css_file_path:getCSSPath()
            });
        await fs.writeFile(writeFilePath, updatedValue);
        return res.send(updatedValue);
      } catch (error) {
        console.log("err", error);
      }

})

app.get('/resume',async function (req,res){
    const writeFilePath = getWriteFilePath();

    try {
        const data = await fs.readFile(writeFilePath, "utf-8");
        //replace

        return res.send(data);
      } catch (error) {
        console.log("err", error);
      }
})

//root --> http://localhost:8000/doctor
//order matter
// app.use('/doctor',doctorRoute);
// app.use('/patient',patientRoute);

//error 404
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
