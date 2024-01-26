const express = require("express");
const multer = require("multer");
const cors = require("cors");
const file_model = require('./models/model.js');
const mongoose = require("mongoose");
const { findOneAndReplace } = require("./models/model.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))
mongoose.connect('mongodb://localhost:27017')
    .then(res => console.log("Mongoose connected"))
    .catch(err => console.log(err));
var subject;


app.post('/subject', (req, res) => {
    console.log(req.body.subject, "im in /subject");
    subject = req.body.subject
    res.end();
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.body);
        if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
            return cb(null, `./public/${subject}/images`);
        }
        if (file.mimetype === "application/pdf") {
            return cb(null, `./public/${subject}/PDFS`);
        }
        return cb(null, "./public");
    },

    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage });

app.post('/uploads', upload.single('file'), (req, res) => {
    // console.log(req.body);
    console.log(req.file);
    const t = req.file.mimetype === "image/jpeg" ? "images" : "PDFS";
    console.log(t);
    file_model.create({
        name: req.file.filename,
        sub: subject,
        type: req.file.mimetype === "image/jpeg" ? "images" : "PDFS",
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))

    res.end();
})

app.get('/file', (req, res) => {
    file_model.find()
        .then(r => { res.json(r)})
        .catch(err => {res.json(err) });
})

app.listen(3001, () => {
    console.log("Server is running");
})