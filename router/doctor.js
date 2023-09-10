const express = require('express');
const router = express.Router();
http://localhost:8000/doctor/1

//const routes = [get,post,put,delete]

//GET
// /,/:id

// router.route('/')
//     .get(function (req,res){
//         return res.send('doctor-get-all');
//     })
//     .post(function (req,res){
//         return res.send('doctor-post');
//     });

// router.route('/:id')
//     .put(function (req,res){
//         return res.send('doctor-put-id');
//     })
//     .get(function (req,res){
//         return res.send('doctor-get-id');
//     })
//     .delete(function (req,res){
//         return res.send('doctor-delete-id');
//     });

router.get('/',function (req,res){
    return res.send('doctor-get-all');
});

router.get('/:id',function (req,res){
    return res.send('doctor-get-id');
});

//POST
router.post('/',function (req,res){
    return res.send('doctor-post');
});

//PUT
router.put('/:id',function (req,res){
    return res.send('doctor-put-id');
});

//DELETE
router.delete('/:id',function (req,res){
    return res.send('doctor-delete-id');
});

module.exports = router;
