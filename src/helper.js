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