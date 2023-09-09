const express = require('express');
const doctorRoute = require('./router/doctor');
const patientRoute = require("./router/patient");
require('dotenv').config();

const PORT = 8000;

const app = express();

app.use('/doctor',doctorRoute);
app.use('/patient',patientRoute);

app.listen(PORT,function listenPort(err,data){
    if(err){
        console.log(`error occur ${err}`);
        return;
    }
    console.log(`hello server started successfully at ${process.env.enviroment} enviroment PORT ${PORT}`);
});
module.exports = app;