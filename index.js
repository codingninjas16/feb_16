const express = require('express');
const doctorRoute = require('./router/doctor');
const patientRoute = require("./router/patient");
require('dotenv').config();

const PORT = 8000;

const app = express();
//root --> http://localhost:8000/doctor
//order matter
app.use('/doctor',doctorRoute);
app.use('/patient',patientRoute);

//error 404
app.all('/*',function (req,res){
    return res.send('error 404');
})
app.listen(PORT,function listenPort(err,data){
    if(err){
        console.log(`error occur ${err}`);
        return;
    }
    console.log(`hello server started successfully at ${process.env.enviroment} enviroment PORT ${PORT}`);
});
module.exports = app;