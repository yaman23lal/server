const membermodel =require("../../database/models/members")

const showForm= async (req,res)=>{
    res.render("addMember")
} 

const getAreaseawdar= async (req,res)=>{
    const block= req.body.Block;
    const dist= req.body.Dist;
    const AreaSewadar = await membermodel.aggregate([
        { $match: { Dist:dist,Block:block,'Sewadar.Yes':true } },
        { $sort: { 'Swadar.Count':1 } }
      ])
      res.send(AreaSewadar);
}

module.exports={
    showForm,
    getAreaseawdar
}