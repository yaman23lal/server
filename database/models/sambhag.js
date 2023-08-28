const mongoose = require('mongoose');
const db =require("../../database/init")
const { Schema } = mongoose;

const sambhagSchema = new Schema({
  Name:String,
  eName:String
});

const SambhagModel = mongoose.model("Sambhag", sambhagSchema);

module.exports = SambhagModel;



const sambhag=[
    {
        Name: "रायपुर",
        eName:"Raipur"
    },
    {
        Name: "बिलासपुर",
        eName:"Bilaspur"
    },
    {
        Name: "बस्तर",
        eName:"Bastar"
    },
    {
        Name: "सरगुजा",
        eName:"Sarguja"
    },
    {
        Name: "दुर्ग",
        eName:"Durg"
    }
]

// db();

// SambhagModel.insertMany(sambhag).then(()=>{
//     console.log("saved Succse sambhag");
// }).catch(()=>{
//     console.log("not savsed");
// })



