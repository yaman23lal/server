const mongoose = require('mongoose');
const { Schema } = mongoose;
const db =require("../init")

const AdminSchema = new Schema({
  Name: String,
  Mobile: Number,
  UserId:String,
  Password: String,
  profile_pic: String,
  Block:String,
  Sambhag:String,
  Dist:String,
  isVerified: {
    type: Boolean,
    default: false
  },
  type:String
});

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;


const admin =[
  {
    Name: "Trivendra",
    Mobile: 9755676168,
    UserId:"tr",
    Password: "tr",
    profile_pic:"1fcf3558d8d6118171ce16083bd4d584",
    Block:"कुरुद",
    Sambhag:"रायपुर",
    Dist:"धमतरी",
    isVerified: true,
    type:"Admin"
  },
  {
    Name: "Trivendra",
    Mobile: 9090909090,
    UserId:"tr",
    Password: "tr",
    profile_pic:"1fcf3558d8d6118171ce16083bd4d584",
    Block:"कुरुद",
    Sambhag:"रायपुर",
    Dist:"धमतरी",
    isVerified: true,
    type:"Block"
  },
  {
    Name: "Trivendra",
    Mobile: 8080808080,
    UserId:"tr",
    Password: "tr",
    profile_pic:"1fcf3558d8d6118171ce16083bd4d584",
    Block:"कुरुद",
    Sambhag:"रायपुर",
    Dist:"धमतरी",
    isVerified: true,
    type:"District"
  },
  {
    Name: "Trivendra",
    Mobile: 7070707070,
    UserId:"tr",
    Password: "tr",
    profile_pic:"1fcf3558d8d6118171ce16083bd4d584",
    Block:"कुरुद",
    Sambhag:"रायपुर",
    Dist:"धमतरी",
    isVerified: true,
    type:"Sambhag"
  },
]


// db();

// AdminModel.insertMany(admin).then(()=>{
//     console.log("saved Succse admins");
// }).catch(()=>{
//     console.log("not savsed");
// })