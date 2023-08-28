// const { db } = require("../../database/models/admin");
const { Db } = require("mongodb");
const Attandance =require("../../database/models/attandance");
const MemberModel = require("../../database/models/members");
const membermodel =require("../../database/models/members");


const getReport=async (req,res)=>{
    const dist=req.body.Dist;
    const block= req.body.Block;
    const day = new Date().getDate();
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    
    let today = `${year}-${month+1}-${day}`
    const date1 = new Date(today)
        let tomorrow =new Date(date1.getTime()+19*60*60*1000-24*60*60*1000);
        let tod =new Date(date1.getTime()+6*60*60*1000)
       

const data =await Attandance.find({Dist:dist,Block:block ,date:{$gt:tomorrow,$lt:tod}});
const all= await MemberModel.aggregate([
    { "$match" : {Dist:dist,Block:block,isActive:true}},
    { "$facet": {
      "JilaActive": [
        { "$match" : {Group:"जिला ग्रुप"}},
        { "$count": "JilaActive" },
      ],
      "BlockActive": [
        { "$match" : {Group:"ब्लॉक ग्रुप"}},
        { "$count": "BlockActive" }
      ]
    }},
    { "$project": {
      "JilaActive": { "$arrayElemAt": ["$JilaActive.JilaActive", 0] },
      "BlockActive": { "$arrayElemAt": ["$BlockActive.BlockActive", 0] },
    }}
  ])

  console.log(all);
const totald= await MemberModel.find({Dist:dist,Block:block,isActive:true,Group:"जिला ग्रुप"});
const totalb= await MemberModel.find({Dist:dist,Block:block,isActive:true,Group:"ब्लॉक ग्रुप"});
const AreaSewadar = await membermodel.aggregate([
    { $match: { Dist:dist,Block:block,'Sewadar.Yes':true } },
    { $sort: { 'Swadar.Count':1 } }
  ])

const absM= await getAbsent(dist,block);
// console.log("absent member + "+absM);
// console.log("matched data absent list " +absM.length);
// console.log("matched data total dist list " +totald.length);
// console.log("matched data total block list " +totalb.length);
// console.log("present list " +data.length);
// console.log("present " +data);


res.send({Data:data,totald:totald.length,totalb:totalb.length,Absent:absM,AreaSewadar:AreaSewadar})

}
const getAbsent=async (dist,block)=>{
    const day = new Date().getDate();
const month = new Date().getMonth()
const year = new Date().getFullYear()

let today = `${year}-${month+1}-${day}`
const date1 = new Date(today)
    let tomorrow =new Date(date1.getTime()+19*60*60*1000-24*60*60*1000);
    let tod =new Date(date1.getTime()+6*60*60*1000)


//     const data =await Attandance.aggregate([
//       {$match:{date: { $gt:tomorrow, $lt: tod } }},
        
//         {$lookup:{
//         from:"members",
//         localField:"Mobile",
//         foreignField:"Mobile",
//         as:"data"}
//         }
//      ,
//     //  {"$unwind":"$data"},
//     // {"$unwind":"$data.members"},
//     {"$match":{"data.isActive":true}

// }
//     ])




    const data =await membermodel.aggregate([
      {$match:{isActive: true ,Dist:dist,Block:block}},
      {
        $lookup:
           {
             from: "attandances",
             let: { num_mem: "$Mobile"},
             pipeline: [
                { $match:
                   { $expr:
                      { $and:
                         [
                           { $eq: [ "$Mobile",  "$$num_mem" ] },
                           { $gte: [ "$date", tomorrow ] },
                           { $lte: [ "$date", tod ] }
                         ]
                      }
                   }
                }
                // { $project: {  _id: 0 ,} }
             ],
             as: "data"
           }
      },
        
      {"$match":{"data": { $eq:[] }}},
    ])
    //     {$lookup:{
    //     from:"attandances",

    //     localField:"Mobile",
    //     foreignField:"Mobile",
    //     as:"data"}
    //     }
    //  ,
    //  {"$unwind":"$data"},
    // {"$unwind":"$data.members"},
    // {"$match":{"data.date": { $gt:tomorrow, $lt: tod }}}



   
 return data;

}

const getSingle =async(req,res)=>{
   
  const id = req.params.id;
 console.log(id);
try {

    const user = await Attandance.findOne({_id:id})
    if (user) {
        res.render("singleDetail",{User:user})

        
    }
    else{
        res.status(400).send("User Not Found")
    }
    
} catch (error) {
    console.log(error);
}


}


const showReport= async (req,res)=>{
  
    res.render("report1")
}

module.exports={
    getReport,
    showReport,
    getSingle
}