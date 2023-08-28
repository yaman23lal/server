const AdminModel= require("../../database/models/admin")
const membermodel =require("../../database/models/members")
const getDistBlock= require("../../controllers/sdistblockController")
 const getUser= async function (mobile, password, callback) {
	AdminModel.find({ Mobile: mobile, Password: password })
		.then(function (data) {
			callback(null, data)
		})
		.catch(function (err) {
            console.log("user not found admin service");
			callback("user not found");
		})
}
 const createAdmin= async function (user) {
	const admin =new AdminModel(user);
	admin.save()
		.then(function (data) {
			console.log(data);
			console.log("admin save succse");
		})
		.catch(function (err) {
            console.log("not saved");
			console.log(err);
			
		})
}

const loginBlock= async function (user,res) {
		const dist=user.Dist;
        const block=user.Block;
        const all= await membermodel.aggregate([
            { "$match" : {Dist:dist,Block:block}},
            { "$facet": {
                "AllMember":[{ "$match" : {Dist:dist,Block:block}}],
                "AreaSewadar":[{ $match: { 'Sewadar.Yes':true } }],
              "JilaTotal": [
                { "$match" : {Group:"जिला ग्रुप"}},
                { "$count": "JilaTotal" },
              ],
              "BlockTotal": [
                { "$match" : {Group:"ब्लॉक ग्रुप"}},
                { "$count": "BlockTotal" },
              ],
              "JilaActive": [
                { "$match" : {Group:"जिला ग्रुप",isActive:true}},
                { "$count": "JilaActive" },
              ],
              "BlockActive": [
                { "$match" : {Group:"ब्लॉक ग्रुप",isActive:true}},
                { "$count": "BlockActive" }
              ]
            }},
            { "$project": {
              "JilaTotal": { "$arrayElemAt": ["$JilaTotal.JilaTotal", 0] },
              "BlockTotal": { "$arrayElemAt": ["$BlockTotal.BlockTotal", 0] },
              "JilaActive": { "$arrayElemAt": ["$JilaActive.JilaActive", 0] },
              "BlockActive": { "$arrayElemAt": ["$BlockActive.BlockActive", 0] },
              "AllMember":1,
              "AreaSewadar":1
            }}
          ])
          
          const Jt=all[0].JilaTotal||0;
          const Bt=all[0].BlockTotal||0;
          const Ja=all[0].JilaActive||0;
          const Ba=all[0].BlockActive||0;


        //   console.log(all[0]);

        // res.render("./Admin/Block",{User:user,Member:Member,AreaSewadar:AreaSewadar})
        res.send({User:user,JilaT:Jt,BlockT:Bt,JilaAc:Ja,BlockAc:Ba, Member:all[0].AllMember,AreaSewadar:all[0].AreaSewadar})
	
}
const loginDistrict= async function (user,res) {
		const dist=user.Dist;
        const block = await getDistBlock.getB(dist)
       console.log(block);
	//    res.send(block)

          const all= await membermodel.aggregate([
            { "$match" : {Dist:dist}},
            { "$facet": {
                "AllDMember":[{ "$match" : {Group:"जिला ग्रुप"}},
								{ "$count": "AllDMember" }	
			],
                "AllBMember":[{ "$match" : {Group:"ब्लॉक ग्रुप"}},
								{ "$count": "AllBMember" }	
			],
				"AllDActive": [
                { "$match" : {Group:"जिला ग्रुप",isActive:true}},
                { "$count": "JilaActive" },
              ],
              "AllBActive": [
                { "$match" : {Group:"ब्लॉक ग्रुप",isActive:true}},
                { "$count": "BlockActive" }
              ]
            }},
            { "$project": {
              "AllDMember": { "$arrayElemAt": ["$AllDMember.AllDMember", 0] },
              "AllBMember": { "$arrayElemAt": ["$AllBMember.AllBMember", 0] },
              "AllDActive": { "$arrayElemAt": ["$AllDActive.JilaActive", 0] },
              "AllBActive": { "$arrayElemAt": ["$AllBActive.BlockActive", 0] },
            }}
          ])
          
          const AllJt=all[0].AllDMember||0;
          const AllBt=all[0].AllBMember||0;
          const AllJa=all[0].AllDActive||0;
          const AllBa=all[0].AllBActive||0;

		 const AllMem= AllJt+ AllBt;
		 const AllActv= AllJa+ AllBa;
		 const AllJDeact =AllJt-AllJa;
		 const AllBDeact = AllBt+ AllBa
		 const AllDeact= AllJDeact+AllBDeact;
		   
		 const blockSewadar = await AdminModel.aggregate([
			{$match:{type:"Block"}},
			{$sort:{Block:1}}
		 ])

		const JilaAll= {
			TotalMem:AllMem,
			TotalD:AllJt,
			TotalB:AllBt,
			TotalAct:AllActv,
			TotalActD:AllJa,
			TotalActB:AllBa,
			TotalDeact:AllDeact,
			TotalDeactD:AllJDeact,
			TotalDeactB:AllBDeact,
		}


        // res.render("./Admin/Block",{User:user,Member:Member,AreaSewadar:AreaSewadar})
        res.send({User:user,Jila:JilaAll,AllBlock:blockSewadar})
	
}
const loginSambhag= async function (user,res) {
		const dist=user.Dist;
        const block=user.Block;
        // const Member = await membermodel.find({Dist:dist,Block:block})
        // const AreaSewadar = await membermodel.aggregate([
        //     { $match: { Dist:dist,Block:block,'Sewadar.Yes':true } },
        //     { $sort: { 'Swadar.Count':1 } }
        //   ])

          const all= await membermodel.aggregate([
            { "$match" : {Dist:dist,Block:block}},
            { "$facet": {
                "AllMember":[{ "$match" : {Dist:dist,Block:block}}],
                "AreaSewadar":[{ $match: { 'Sewadar.Yes':true } }],
              "JilaTotal": [
                { "$match" : {Group:"जिला ग्रुप"}},
                { "$count": "JilaTotal" },
              ],
              "BlockTotal": [
                { "$match" : {Group:"ब्लॉक ग्रुप"}},
                { "$count": "BlockTotal" },
              ],
              "JilaActive": [
                { "$match" : {Group:"जिला ग्रुप",isActive:true}},
                { "$count": "JilaActive" },
              ],
              "BlockActive": [
                { "$match" : {Group:"ब्लॉक ग्रुप",isActive:true}},
                { "$count": "BlockActive" }
              ]
            }},
            { "$project": {
              "JilaTotal": { "$arrayElemAt": ["$JilaTotal.JilaTotal", 0] },
              "BlockTotal": { "$arrayElemAt": ["$BlockTotal.BlockTotal", 0] },
              "JilaActive": { "$arrayElemAt": ["$JilaActive.JilaActive", 0] },
              "BlockActive": { "$arrayElemAt": ["$BlockActive.BlockActive", 0] },
              "AllMember":1,
              "AreaSewadar":1
            }}
          ])
          
          const Jt=all[0].JilaTotal;
          const Bt=all[0].BlockTotal;
          const Ja=all[0].JilaActive||0;
          const Ba=all[0].BlockActive||0;


        //   console.log(all[0]);

        // res.render("./Admin/Block",{User:user,Member:Member,AreaSewadar:AreaSewadar})
        res.send({User:user,JilaT:Jt,BlockT:Bt,JilaAc:Ja,BlockAc:Ba, Member:all[0].AllMember,AreaSewadar:all[0].AreaSewadar})
	
}
const loginAdmin= async function (user,res) {
		const dist=user.Dist;
        const block=user.Block;
        // const Member = await membermodel.find({Dist:dist,Block:block})
        // const AreaSewadar = await membermodel.aggregate([
        //     { $match: { Dist:dist,Block:block,'Sewadar.Yes':true } },
        //     { $sort: { 'Swadar.Count':1 } }
        //   ])

          const all= await membermodel.aggregate([
            { "$match" : {Dist:dist,Block:block}},
            { "$facet": {
                "AllMember":[{ "$match" : {Dist:dist,Block:block}}],
                "AreaSewadar":[{ $match: { 'Sewadar.Yes':true } }],
              "JilaTotal": [
                { "$match" : {Group:"जिला ग्रुप"}},
                { "$count": "JilaTotal" },
              ],
              "BlockTotal": [
                { "$match" : {Group:"ब्लॉक ग्रुप"}},
                { "$count": "BlockTotal" },
              ],
              "JilaActive": [
                { "$match" : {Group:"जिला ग्रुप",isActive:true}},
                { "$count": "JilaActive" },
              ],
              "BlockActive": [
                { "$match" : {Group:"ब्लॉक ग्रुप",isActive:true}},
                { "$count": "BlockActive" }
              ]
            }},
            { "$project": {
              "JilaTotal": { "$arrayElemAt": ["$JilaTotal.JilaTotal", 0] },
              "BlockTotal": { "$arrayElemAt": ["$BlockTotal.BlockTotal", 0] },
              "JilaActive": { "$arrayElemAt": ["$JilaActive.JilaActive", 0] },
              "BlockActive": { "$arrayElemAt": ["$BlockActive.BlockActive", 0] },
              "AllMember":1,
              "AreaSewadar":1
            }}
          ])
          
          const Jt=all[0].JilaTotal;
          const Bt=all[0].BlockTotal;
          const Ja=all[0].JilaActive||0;
          const Ba=all[0].BlockActive||0;


        //   console.log(all[0]);

        // res.render("./Admin/Block",{User:user,Member:Member,AreaSewadar:AreaSewadar})
        res.send({User:user,JilaT:Jt,BlockT:Bt,JilaAc:Ja,BlockAc:Ba, Member:all[0].AllMember,AreaSewadar:all[0].AreaSewadar})
	
}


module.exports={
    getUser,
	createAdmin,
	loginAdmin,
	loginBlock,
	loginDistrict,
	loginSambhag
}