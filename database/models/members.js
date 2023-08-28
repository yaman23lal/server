const mongoose = require('mongoose');
const { Schema } = mongoose;
const db =require("../init")


const memberSchema = new Schema({
  Name:String,
  Mobile:Number,
  Sambhag:String,
  Dist:String,
  Block:String,
  Gaon:String,
  Gender:String,
  Group:String,
  AreaSewadar:Number,
  Team:{
    type:String,
    default:""
  },
  isActive:{
    type:Boolean,
    default:true
  },
  Department:{
    type:Boolean,
    default:false
  },
  TrendMember:{
    type:Boolean,
    default:false
  },
  Sewadar:{ 
    Yes:{  
    type:Boolean,
    default:false
  },
  Count:{
    type:Number,
    default:0
  }  
}
});

const MemberModel = new mongoose.model("Member", memberSchema);

module.exports = MemberModel;

const member=[
  {
    Name:"त्रिवेंद्र दास",
    Mobile:9755676168,
    Dist:"धमतरी",
    Block:"कुरुद",
    Gender:"Male",
    Group:"जिला ग्रुप",
    AreaSewadar:2,
    Team:"CG Speacial Trend Team",
    Sambhag:"रायपुर",
    isActive:true,
    Department:true,
    TrendMember:true,
    
 },
  {
    Name:"गजेंद्र दास",
    Mobile:9669056859,
    Dist:"धमतरी",
    Block:"कुरुद",
    Gender:"Male",
    Group:"जिला ग्रुप",
    Sambhag:"रायपुर",
    AreaSewadar:2,
    isActive:true,
    Department:false,
    TrendMember:false
 },
  {
    Name:"भेनु दासी",
    Mobile:8966968500,
    Dist:"धमतरी",
    Block:"कुरुद",
    Gender:"Female",
    Group:"जिला ग्रुप",
    Sambhag:"रायपुर",
    AreaSewadar:1,
    isActive:true,
    Department:false,
    TrendMember:false
 },
  {
    Name:"कल्पना दासी",
    Mobile:8770354600,
    Dist:"धमतरी",
    Block:"कुरुद",
    Gender:"Female",
    Group:"जिला ग्रुप",
    AreaSewadar:1,
    Sambhag:"रायपुर",
    isActive:true,
    Department:false,
    TrendMember:false
 },
  {
    Name:"तिनिष्का दासी",
    Mobile:1010101010,
    Dist:"धमतरी",
    Block:"कुरुद",
    Gender:"Female",
    AreaSewadar:1,
    Group:"ब्लॉक ग्रुप",
    Team:"Jila Trend Team",
    Sambhag:"रायपुर",
    isActive:false,
    Department:false,
    TrendMember:true

 },
  {
    Name:"भगवती दासी",
    Mobile:2020202020,
    Dist:"धमतरी",
    Block:"कुरुद",
    Gender:"Female",
    Group:"जिला ग्रुप",
    AreaSewadar:1,
    Team:"Jila Trend Team",
    Sambhag:"रायपुर",
    isActive:true,
    Department:false,
    TrendMember:true,
    Sewadar:{ 
      Yes:true,
      Count:1
    } 
 },
  {
    Name:"ईश्वरी दासी",
    Mobile:3030303030,
    Dist:"धमतरी",
    Block:"कुरुद",
    AreaSewadar:1,
    Gender:"Female",
    Group:"जिला ग्रुप",
    Sambhag:"रायपुर",
    isActive:true,
    Department:false,
    TrendMember:false
 },
 {
  Name:"जीतेन्द्र दास",
  Mobile:4040404040,
  Dist:"धमतरी",
  Block:"कुरुद",
  Gender:"Male",
  Group:"जिला ग्रुप",
  AreaSewadar:2,
  Team:"Jila Trend Team",
  Sambhag:"रायपुर",
  isActive:false,
  Department:false,
  TrendMember:true
},
 {
  Name:"डेमांशु दास",
  Mobile:6060606060,
  Dist:"धमतरी",
  Block:"कुरुद",
  Gender:"Male",
  Group:"ब्लॉक ग्रुप",
  AreaSewadar:2,
  Team:"Jila Trend Team",
  Sambhag:"रायपुर",
  isActive:false,
  Department:false,
  TrendMember:true
},
 {
  Name:"खुलेश दास",
  Mobile:6060606066,
  Dist:"धमतरी",
  Block:"कुरुद",
  Gender:"Male",
  Group:"ब्लॉक ग्रुप",
  AreaSewadar:2,
  Team:"Jila Trend Team",
  Sambhag:"रायपुर",
  isActive:false,
  Department:false,
  TrendMember:true,
  Sewadar:{ 
    Yes:true,
    Count:2
  } 
},
 {
  Name:"नोहर दास",
  Mobile:5050505050,
  Dist:"राजनांदगांव",
  Block:"राजनांदगांव",
  Gender:"Male",
  Group:"जिला ग्रुप",
  AreaSewadar:0,
  Team:"CG Speacial Trend Team",
  Sambhag:"दुर्ग",
  isActive:true,
  Department:true,
  TrendMember:true

},

]


// db();

// MemberModel.insertMany(member).then(()=>{
//     console.log("saved Succse members");
// }).catch(()=>{
//     console.log("not savsed");
// })
