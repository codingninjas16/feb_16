const express = require('express');
require('dotenv').config();

const PORT = 8000;

const app = express();


app.listen(PORT,function listenPort(err,data){
    if(err){
        console.log(`error occur ${err}`);
        return;
    }
    console.log(`hello server started successfully at ${process.env.enviroment} enviroment PORT ${PORT}`);
});