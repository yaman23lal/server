const mongoose = require('mongoose');
// const { db } = require('./sambhag');
const db =require("../init")
const { Schema } = mongoose;

const DistrictSchema = new Schema({
  Name:String,
  sName:String,
  Code:String
});

const DistrictModel = mongoose.model("District", DistrictSchema);

module.exports = DistrictModel;



const dist=[
    {
        Name:"रायपुर",
        sName:"Raipur",
        Code:"CG04" 
    },
    {
        Name:"बलोदा बाजार",
        sName:"Raipur",
        Code:"CG22" 
    },
    {
        Name:"गरियाबंद",
        sName:"Raipur",
        Code:"CG23" 
    },
    {
        Name:"महासमुंद",
        sName:"Raipur",
        Code:"CG06" 
    },
    {
        Name:"धमतरी",
        sName:"Raipur",
        Code:"CG05" 
    },
    {
        Name:"बिलासपुर",
        sName:"Bilaspur",
        Code:"CG10" 
    },
    {
        Name:"मुंगेली",
        sName:"Bilaspur",
        Code:"CG28" 
    },
    {
        Name:"कोरबा",
        sName:"Bilaspur",
        Code:"CG12" 
    },
    {
        Name:"जांजगीर-चाम्पा",
        sName:"Bilaspur",
        Code:"CG11" 
    },
    {
        Name:"रायगढ़",
        sName:"Bilaspur",
        Code:"CG13" 
    },
    {
        Name:"सारंगगढ़-बिलाईगढ़",
        sName:"Bilaspur",
        Code:"CG" 
    },
   
    {
        Name:"बस्तर संभाग",
        sName:"Bastar",
        Code:"CG17" 
    },
    {
        Name:"कांकेर",
        sName:"Bastar",
        Code:"CG19" 
    },
    {
        Name:"कोरिया",
        sName:"Sarguja",
        Code:"CG16" 
    },
    {
        Name:"सरगुजा",
        sName:"Sarguja",
        Code:"CG15" 
    },
    {
        Name:"बलरामपुर",
        sName:"Sarguja",
        Code:"CG30" 
    },
    {
        Name:"सूरजपुर",
        sName:"Sarguja",
        Code:"CG29" 
    },
    {
        Name:"जशपुर",
        sName:"Sarguja",
        Code:"CG14" 
    },
    {
        Name:"दुर्ग",
        sName:"Durg",
        Code:"CG07" 
    },
    {
        Name:"राजनांदगाव",
        sName:"Durg",
        Code:"CG08" 
    },
    {
        Name:"बेमेतरा",
        sName:"Durg",
        Code:"CG25" 
    },
    {
        Name:"बालोद",
        sName:"Durg",
        Code:"CG24" 
    },
    {
        Name:"कबीरधाम",
        sName:"Durg",
        Code:"CG09" 
    },
    {
        Name:"खैरागढ़-छुईखदान-गंडई",
        sName:"Durg",
        Code:"" 
    },
    {
        Name:"मोहला-मानपुर-चौकी",
        sName:"Durg",
        Code:"" 
    },

]

// db();

// DistrictModel.insertMany(dist).then(()=>{
//     console.log("saved Succse dist");
// }).catch(()=>{
//     console.log("not savsed");
// })