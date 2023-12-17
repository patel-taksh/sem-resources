const  express = require("express");
const multer =require("multer");
const cors =require("cors");

const app=express();
app.use(cors());
app.use(express.json());

const storage=multer.diskStorage({
    destination: function(req,file,cb){
        if(file.mimetype === "image/png" || file.mimetype === "image/jpeg"){
            return cb(null, "./public/images");
        }
        if(file.mimetype === "application/pdf"){
            return cb(null, "./public/PDFS");
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
    console.log(req.file);
})

app.listen(3001, ()=>{
    console.log("Server is running");
})