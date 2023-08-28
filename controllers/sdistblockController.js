const sambhagModel = require("../database/models/sambhag")
const distModel = require("../database/models/district")
const blockModel = require("../database/models/block")


const getSambhag= async (req,res)=>{
    const data =await sambhagModel.find({});

    if (data) {
        res.send(data)
    }
    else{
        console.log("Error in findin sambhag")
    }
}
const getDist= async (req,res)=>{
    // console.log(req.body);
    const sam = req.body.Sam ||req

    const data =await distModel.find({sName:sam});

    if (data) {
        if (res) {     
            res.send(data)
        }
        else{
            return data;
        }
    }
    else{
        console.log("Error in findin Dist")
    }
}
const getBlock= async (req,res)=>{
    // console.log(req.body);
    const dist= req.body.Dist 
    const data =await blockModel.find({dName:dist})
    // .then((d)=>console.log(d))

    if (data) {
        // console.log(data);
            
            res.send(data)
       
    }
    else{
        console.log("Error in findin block")
    }
}
const getB= async (dist)=>{   
    const data =await blockModel.aggregate([
        {$match:{dName:dist}},
    { "$project": {
        "_id": 0,
        "Name": 1,
    }}
    ])
    // .then((d)=>console.log(d))
    if (data) {          
            return data;     
    }
    else{
        console.log("Error in findin block")
    }
}
const getD= async (sam)=>{   
    const data =await distModel.aggregate([
        {$match:{sName:sam}},
    { "$project": {
        "_id": 0,
        "Name": 1,
    }}
    ])
    if (data) {          
            return data;     
    }
    else{
        console.log("Error in findin block")
    }
}



module.exports={
    getSambhag,
    getDist,
    getBlock,
    getB,
    getD
}