const path = require('path');
module.exports.getFilePath = function getFilePath(templateId){
    if(templateId == 1){
       return path.join(__dirname,'template/template1.html');
    }
}

module.exports.getWriteFilePath = function getWriteFilePath(templateId){
   
    return path.join(__dirname,'template/writeTemplate1.html');
    
}
module.exports.getCSSPath = function getCSSPath(templateId){
   
    return path.join(__dirname,'template/index.css');
    
}

module.exports.replaceString = function replaceString(data,dataToReplace) {
    const keys = Object.keys(dataToReplace);
    keys.map((item) => {
      data = data.replace(`{{--${item.toUpperCase()}--}}`, dataToReplace[item]);
    });
    return data;
  }


  // send Succes Reponse 
  // send Error Reposne
//error
// res,404,402, false,"agkag"
  module.exports.sendMessageAsJSON =  function sendMessageAsJSON(res,statusCode ,success = false,mssg = "",data = null ){
     var resp = {};
     if(success){
        resp['success'] = true;
     }else{
        resp['success'] = false;
     }

     if(mssg){
        resp['msgg']  = mssg;
     }
     if(data){
        resp['data'] = data;
     }
     return res.status(statusCode).json(resp);
  }