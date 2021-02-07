const router = require("express").Router();
const FileDB = require('../model/file');
var path = require('path');

router.post('/', (req,res)=>{
    if(req.files){
       const OurFile=req.files.filename;
      const FileUrl='./allfiles/' +OurFile.name;
        OurFile.mv(FileUrl, async(err)=>{
            if(err){
                return res.status(500).send(err);
            }
            const file_details= new FileDB({
                file_name : OurFile.name,
                file_url: FileUrl,
            })
            try{
                const data = await file_details.save();
                res.send('file saved \n'+ data)
            }
            catch(error){
                res.status(400).send(error)
            }
        })
    }
})
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../')+'/index.html')
})
router.get('/files/:img_name', (req,res)=>{
    const x=path.join(__dirname,'../'+'allfiles/')
    res.download(x+req.params.img_name)
})



module.exports = router;
