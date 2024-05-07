const express = require('express');
const router = express.Router();
const Model = require('../Models/user')

router.post('/add',(req,res)=>{
    console.log(req.body);
    //storing data to mongodb
    new Model(req.body).save()
    .then(result=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
        res.status(500).json(err)
    });
})
router.post('/authenticate', (req,res)=> {                                          //login
    Model.findOne(req.body)
    .then((result)=> {
        if(result)res.json(result);
        else res.status(400).json({message: 'login failed'});
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});
router.get('/getall', (req,res)=> {                                                
    Model.find({})                                                                  //search sbkuch
    .then((result)=> {
        res.json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});
router.get("/getbyemail/:email",(req,res)=>{                           //forget
    console.log(req.params.email);
    Model.findOne({email:req.params.email})
    .then((result)=>{
        res.json(result)

    }).catch((err)=>{
        console.log(err)
        res.status(500).json(err)
    });

});
router.put('/update/:id', (req,res)=> {                                           //forget       
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})                                                                  //search sbkuch
    .then((result)=> {
       res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});
router.get('/getuser/:id', (req,res)=> {                                          //forget          
    Model.findById(req.params.id)                                                                  //search sbkuch
    .then((result)=> {
       res.status(200).json(result);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err)
    });
});


module.exports=router;