const router= require('express').Router();

const ListData= require('../model/Allitems')
const verify = require('./varifyToken')

router.get('/list',verify, async(req,res)=>{

        try{
            const listdata= await ListData.find();
            res.json(listdata)
        }
        catch(err){
            res.json({message:err})
        }
})

router.post('/add-item', verify, async (req,res)=>{
    const listData= new ListData({
        Name: req.body.name,
        Price: req.body.price,
        Details: req.body.details,
    })
    try{
        const saveData= await listData.save();
        res.json(saveData)
    }
    catch(err){
        res.json({message:err})
    }
})

module.exports = router;