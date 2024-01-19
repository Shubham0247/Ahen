const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/SignupModel")
const ContactModel = require("./models/ContactModel")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/signup");

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

app.post('/contact', (req, res) => {
  ContactModel.create(req.body)
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

app.get('/services', (req, res) => {
  console.log(req.body);
})

app.listen(8081, () => {
  console.log("Server is running...");
})