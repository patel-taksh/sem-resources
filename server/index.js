const  express = require("express");
const multer =require("multer");
const cors =require("cors");

const app=express();
app.use(cors());
app.use(express.json());
let subject;

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        console.log(req.body);
        if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
            return cb(null, `./public/oops/images`);
        }
        if(file.mimetype === "application/pdf"){
            return cb(null, `./public/oops/PDFS`);
        }
        return cb(null, "./public");
    },

    filename : function(req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload=multer({storage});

app.post('/uploads', upload.single('file'), (req,res)=>{
    console.log(req.body);
    // console.log(req.file);
    subject=req.body.subject;
})

app.listen(3001, ()=>{
    console.log("Server is running");
})