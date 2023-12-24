const  express = require("express");
const multer =require("multer");
const cors =require("cors");
const file_model=require('./models/model.js');
const mongoose = require("mongoose");

const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017')
.then(res => console.log("Mongoose connected"))
.catch(err => console.log(err));
var subject;


app.post('/subject',(req,res)=>{
    console.log(req.body.subject,"im in /subject");
    subject=req.body.subject;

    res.end();
})

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        console.log(req.body);
        if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
            return cb(null, `./public/${subject}/images`);
        }
        if(file.mimetype === "application/pdf"){
            return cb(null, `./public/${subject}/PDFS`);
        }
        return cb(null, "./public");
    },

    filename : function(req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload=multer({storage});

app.post('/uploads', upload.single('file'), (req,res)=>{
    // console.log(req.body);
    console.log(req.file);
    file_model.create({name: req.file.filename})
    .then(res => console.log(res))
    .catch(err => console.log(err))

    res.end();
})

app.listen(3001, ()=>{
    console.log("Server is running");
})