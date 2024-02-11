const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const multer = require('multer')
const path = require('path')
const UserModel = require("./models/SignupModel")
const ContactModel = require("./models/ContactModel")
const SchoolModel = require("./models/SchoolModel")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/signup");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/Images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.post("/signin", (req, res) => {
  const {email, password} = req.body;

  UserModel.findOne({email: email})
  .then(user => {
    if(user) {
      if(user.password === password) {
        res.json("Success")
      } else {
        res.json("IncorrectPassword")
      } 
    } else {
      res.json("No record existed")
    }
  })
})

app.post('/signup', (req, res) => {
  UserModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.post('/add', upload.single('img'), (req, res) => {
  console.log("Hello");
});

app.post('/contact', (req, res) => {
  ContactModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.get('/services',async (req, res) => {
  try {
    const allSchools = await SchoolModel.find({});
    res.send({status:"ok", data: allSchools})
  } catch (error) {
    console.log(error);
  }
});

app.listen(8081, () => {
  console.log("Server is running...");
})